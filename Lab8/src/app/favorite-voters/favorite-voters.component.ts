import { Component, OnInit } from '@angular/core';
import { FavoriteVoterService } from '../services/favorite-voter.service';
import { Voter } from '../services/voter.service';
import { VoterFullInfoComponent } from '../voter-full-info/voter-full-info.component';
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-favorite-voters',
  templateUrl: './favorite-voters.component.html',
  styleUrls: ['./favorite-voters.component.css']
})
export class FavoriteVotersComponent implements OnInit {
  public voters$ = new BehaviorSubject<Voter[]>([]);
  voters: Voter[] = [];
  dataSource = new MatTableDataSource(this.voters);
  displayedColumns: string[] = ['name', 'gender', 'birhDate', 'age', 'isfavorite'];

  constructor(public favoriteVoterService: FavoriteVoterService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.favoriteVoterService.favoriteVoters$.subscribe(voters => {
      this.voters = voters;
      this.dataSource = new MatTableDataSource(voters);
    })
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
  addToFavorite(voter: Voter) {

    this.favoriteVoterService.addFavoriteVoter(voter);
    this.voters$.next(this.favoriteVoterService.getFavoriteVoters())
  }
  removeFavorite(voter: Voter) {
    this.favoriteVoterService.removeFavoriteVoters(voter);
    this.voters$.next(this.favoriteVoterService.getFavoriteVoters())
  }

}
