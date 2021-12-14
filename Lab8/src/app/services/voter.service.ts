import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  constructor(private http: HttpClient) { }
  apiUrl = "https://randomuser.me/api/?results=50";
  voters: Voter[] = [];

  getVoters(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

export interface Voter {
  uuid: string;
  name: string;
  gender: string;
  birthDate: Date | string;
  age: number | string;
}
