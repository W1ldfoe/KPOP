import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, ViewChild, AfterViewInit } from '@angular/core';
import { Users } from '../services/users.service';

import { User, UserExtended } from '../interfaces/user';

import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit, AfterViewInit {

  favoritesData: UserExtended[] = [];
  columnsToDisplay: string[] = ['firstName', 'lastName', 'gender', 'birthday', 'age', 'actions'];

  @ViewChild(MatTable) table: MatTable<UserExtended>;

  constructor(private usersService: Users) {
  }

  ngOnInit(): void {
    this.usersService.getFavorites().subscribe(favorites => this.favoritesData = favorites);
  }

  ngAfterViewInit(): void {
    this.usersService.getFavorites().subscribe(_ => this.table.renderRows())
  }

  addFavorite(data: UserExtended ){
    this.usersService.addFavorite(data);
    this.table.renderRows();
  }

  removeFavorite(data: UserExtended) {
    this.usersService.removeFavorite(data);
    this.table.renderRows();
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes)
  }
}
