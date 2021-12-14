import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import {
  User,
  UserExtended
} from '../interfaces/user';

const API_URL = 'https://randomuser.me/api/?results=50';

@Injectable({
  providedIn: 'root',
})
export class Users {
  favorites: UserExtended[] = [];
  sharedFavorites = new BehaviorSubject(this.favorites);
  favoritesObserver = this.sharedFavorites.asObservable();

  constructor(
    private http: HttpClient
  ) {}

  getUsers(): Observable<{ results: User[], info?: object }> {
    return this.http.get<{ results: User[], info?: object }>(API_URL);
  }

  getFavorites(): Observable<UserExtended[]> {
    return this.favoritesObserver;
  }

  addFavorite(user: UserExtended) {
    this.favorites.push(user);
    this.sharedFavorites.next(this.favorites)
    user.isFavorite = true;
    console.log(this.favorites)
  }

  removeFavorite(user: UserExtended) {
    this.favorites = this.favorites.filter(favorite => favorite !== user);
    this.sharedFavorites.next(this.favorites)
    user.isFavorite = false;
  }
}
