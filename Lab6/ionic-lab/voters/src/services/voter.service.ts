import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
    apiUrl = 'https://randomuser.me/api/?results=50';

    constructor(private http: HttpClient) { }


    getVoters(): Observable<any>{
        return this.http.get<any[]>(this.apiUrl);
    }
}

export interface Voter{
  uuid: string;
  name: string;
  gender: string;
  birthDate: Date | string;
  age: number | string;
  email: string;
}
