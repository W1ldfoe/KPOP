import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Voter } from './voter.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteVotersService {
  public favoriteVoters$ = new BehaviorSubject<Voter[]>([]);
  public favoriteVoters: Voter[] = [];
  private storage: Storage | null = null;

  constructor(storage: Storage) {
      this.initStorage(storage);
  }
  public isFavorite(voterToFind: Voter) {
    for (const post of this.favoriteVoters) {
      if (post.uuid === voterToFind.uuid) {
        return true;
      }
    }
    return false;
  }

  public async addFavoriteVoter(voter: Voter) {
    if (!this.isFavorite(voter)) {
      this.favoriteVoters.push(voter);
      await this.storage?.set('favorites', this.favoriteVoters);
      this.favoriteVoters$.next(this.favoriteVoters);
    }
  }

  public async removeFavoriteVoter(voterToRemove: Voter) {
    this.favoriteVoters = this.favoriteVoters.filter(voter => voter.uuid !== voterToRemove.uuid);
    await this.storage?.set('favorites', this.favoriteVoters);
    this.favoriteVoters$.next(this.favoriteVoters);
  }

  private async initStorage(storage: Storage) {
    this.storage = await storage.create();
    const favorites = await this.storage.get('favorites');
    if (favorites) {
      this.favoriteVoters = favorites as Voter[];
      this.favoriteVoters$.next(this.favoriteVoters);
    }
  }
}
