import { Component, OnInit } from '@angular/core';
import { Voter } from '../services/voter.service';
import { VoterService } from '../services/voter.service';
import { MatTableDataSource } from '@angular/material/table';
import { FavoriteVoterService } from '../services/favorite-voter.service';
import { VoterFullInfoComponent } from '../voter-full-info/voter-full-info.component';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit {
  voters: Voter[] = [];

  dataSource = new MatTableDataSource(this.voters);
  displayedColumns: string[] = ['name', 'gender', 'birhDate', 'age', 'isfavorite'];

  constructor(public voterService: VoterService, public favoriteVoterService: FavoriteVoterService, public dialog: MatDialog) { }

  ngOnInit(): void {
      this.voterService.getVoters().subscribe(voters => {
        this.voters = voters.results.map((item:any) => {
          item.uuid = item.login.uuid;
          item.name = item.name.first + " " + item.name.last; 
          item.birthDate = item.dob.date.substring(0, 10);
          item.age = item.dob.age;
          return item
        })
        this.dataSource = new MatTableDataSource(voters.results);
      });
  }

  openDialog(voterUUID: any) {
  var choosenVoter;
  this.voters.find((voter) => {
      if (voter.uuid === voterUUID) {
        choosenVoter = voter
      }
    })
  const dialogRef = this.dialog.open(VoterFullInfoComponent, {
    data: choosenVoter
      });
  }

  addToFavorite(voter: Voter){
    this.favoriteVoterService.addFavoriteVoter(voter);
  }
  
  removeFavorite(voter: Voter){
    this.favoriteVoterService.removeFavoriteVoters(voter);
  }

}
