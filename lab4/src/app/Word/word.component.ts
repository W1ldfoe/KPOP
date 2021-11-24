import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  interpolation: ['[[', ']]'],
})
export class WordComponent {
  public result: string = '';
  public word: Array<string> = [];

  inputWord(event: any) {
    this.word.push(event.target.value);
  }

  reverseWord() {
    let preResult:string = ''
    this.word[this.word.length-1].split(' ').sort().forEach(letter=>{
      preResult+=` ${letter}`
    })
    this.result =preResult
  }
}
