import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  interpolation: ['[[', ']]'],
})
export class UserComponent {
  public result: Array<string> | string = [];
  public users: Array<string> = [];
  public user: string = '';

  inputUser(event: any) {
    this.user = event.target.value;
  }

  addUsers() {
    this.users.push(this.user);
    this.result = '';
    this.user = '';
  }

  showUsers() {
    this.result = this.users;
  }
}
