import { Component } from "@angular/core";

@Component({
  selector: "app-triangle",
  templateUrl: "./triangle.component.html",
  styleUrls: ["./triangle.component.css"],
})
export class TriangleComponent {
  public first: number | null = null;
  public second: number | null = null;
  public resultS: string | null = null;
  public resultP: string | null = null;
  public resultG: string | null = null;

  inputFirstKatet(event: any) {
    this.first = Number(event.target.value);
  }

  inputSecondKatet(event: any) {
    this.second = Number(event.target.value);
  }

  calculation() {
    if (this.first && this.second) {
      this.resultS = `S: ${(this.first * this.second) / 2}`;
      let c = Math.sqrt(this.first * this.first + this.second * this.second);
      this.resultP = `P: ${this.first + this.second + c}`;
      this.resultG = `Hypotenuse: ${c}`;
    }
    this.first = null;
    this.second = null;
  }
}
