import { Component, Input, OnInit } from '@angular/core';
import { SignUpForm } from '../../models/sign-up-form';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  public formModel: SignUpForm = new SignUpForm();

  constructor() { }

  ngOnInit(): void {
    this.formModel = new SignUpForm()
  }

  public getEmailError(): string {
    return !this.formModel.emailIsNotEmpty() ? 'Это поле не может быть пустым' : !this.formModel.validateEmail() ? 'Неверный email' : '';
  }

  public getLoginError(): string {
    return !this.formModel.loginIsNotEmpty() ? 'Это поле не может быть пустым' : !this.formModel.validateLogin() ? 'Используйте английськие буквы' : '';
  }

  public getPhoneError(): string {
    return !this.formModel.validatePhone() ? 'Некоректный номер' : '';
  }
  public getCardError(): string {
    return !this.formModel.validateCard() ? 'Некоректная карта' : '';
  }


  public getHomePageError(): string {
    return !this.formModel.validateHomePage() ? 'Не верный URL' : '';
  }

  public getFullNameError(): string {
    return !this.formModel.fullNameIsNotEmpty() ? 'Это поле не может быть пустым' : '';
  }

  public getSkypeError(): string {
    return !this.formModel.validateSkype() ? 'field skype can contain only latin letters, numbers and underscore' : '';
  }

  public handleSubmit() {
    alert(`${this.formModel.login} was successfully signed up!`);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
