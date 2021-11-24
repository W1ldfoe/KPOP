import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  interpolation: ['[[', ']]'],
})
export class WordComponent {
  public result: string = '';
  public word: string = '';
  public splitString: Array<string> = [];

  inputWord(event: any) {
    this.word = event.target.value;
  }

  reverseWord() {
    this.splitString = this.word.split('');
    this.result = this.splitString.reverse().join('');
    this.word = '';
  }
}
