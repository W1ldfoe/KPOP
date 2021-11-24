import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent {
  public result: number | string = '';

  public firstNumber: number | null = null;
  public secondNumber: number | null = null;

  inputFirstNumber(event: any) {
    this.firstNumber = Number(event.target.value);
  }
  inputSecondNumber(event: any) {
    this.secondNumber = Number(event.target.value);
  }

  calculate() {
    if (this.firstNumber && this.secondNumber) {
      this.result = `Sum ${
        this.firstNumber + this.secondNumber
      }, Multiplication ${this.firstNumber * this.secondNumber} ,Difference ${
        this.firstNumber - this.secondNumber
      }`;
    } else {
      this.result = 'Invalid data format';
    }
  }
}
