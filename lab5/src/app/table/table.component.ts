import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';

import { User, UserExtended } from '../interfaces/user';
import { DialogComponent } from '../dialog/dialog.component';
import { Users } from '../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  columnsToDisplay: string[] = ['firstName', 'lastName', 'gender', 'birthday', 'age', 'actions']
  users: UserExtended[] = [];

  constructor(
    public dialog: MatDialog,
    private usersService: Users
  ) {
    this.usersService.getFavorites().subscribe(favorites => console.log('favorites ->', favorites))
  }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(usersData => this.users = usersData.results.map(user => ({ ...user, isFavorite: false })));
  }

  openDialog(data: object) {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '200px',
      width: '500px',
      data: data
    })
  }

  addFavorite(data: UserExtended) {
    this.usersService.addFavorite(data);
  }

  removeFavorite(data: UserExtended) {
    this.usersService.removeFavorite(data);
  }
}
