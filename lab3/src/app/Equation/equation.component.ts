import { Component } from '@angular/core';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent {
  public resultArr: Array<number> | null = [];
  public x: number | null = null;
  public y: number | null = null;
  public c: number | null = null;
  public dis: number | null = null;
  public preresultPlus: number | null = null;
  public preresultMinus: number | null = null;
  public result: Array<number> | Array<string> | null = [];

  inputX(event: any) {
    this.x = Number(event.target.value);
  }

  inputY(event: any) {
    this.y = Number(event.target.value);
  }
  inputC(event: any) {
    this.c = Number(event.target.value);
  }

  calculation() {
    if (this.x && this.y && this.c) {
      this.result = [];
      this.resultArr = [];
      this.dis = this.y * this.y - 4 * this.x * this.c;
      if (this.dis > 0) {
        this.preresultPlus = (-this.y + Math.sqrt(this.dis)) / (2 * this.x);
        this.resultArr?.push(this.preresultPlus);
        this.preresultMinus = (-this.y - Math.sqrt(this.dis)) / (2 * this.x);
        this.resultArr?.push(this.preresultMinus);
        this.x = null;
        this.y = null;
        this.c = null;
        this.result = this.resultArr;
      } else {
        this.x = null;
        this.y = null;
        this.c = null;
        this.result = ['The discriminant is less than zero'];
      }
    }
  }
}
