import { Injectable } from '@angular/core';
import { Voter } from './voter.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteVoterService {
  public favoriteVoters$ = new BehaviorSubject<Voter[]>([]);
  private favoriteVoters: Voter[] = [];

  constructor() { }


  isFavorite(voterToFind: Voter) {
    for (const voter of this.favoriteVoters) {
      if (voter.uuid === voterToFind.uuid) {
        return true;
      }
    }
    return false;
  }

  addFavoriteVoter(voterToAdd: Voter): void {
    this.favoriteVoters.push(voterToAdd);

    this.favoriteVoters$.next(this.favoriteVoters)

  }
  
  removeFavoriteVoters(voterToRemove: Voter): void {
    this.favoriteVoters = this.favoriteVoters.filter(value => value.uuid != voterToRemove.uuid)
    this.favoriteVoters$.next(this.favoriteVoters)
  }

  getFavoriteVoters(): Voter[] {
    return this.favoriteVoters;
  }
}
