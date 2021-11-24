import { Component } from "@angular/core";

@Component({
  selector: "app-average",
  templateUrl: "./average.component.html",
  styleUrls: ["./average.component.css"],
})
export class AverageComponent {
  public first: number | null = null;
  public second: number | null = null;

  public arefmetical: string | null = null;
  public geometric: string | null = null;

  inputFirst(event: any) {
    this.first = Number(event.target.value);
  }

  inputSecond(event: any) {
    this.second = Number(event.target.value);
  }
  calculation() {
    if (this.first && this.second) {
      this.arefmetical = `Arefmetical averages: ${
        (Math.pow(this.first, 3) + Math.pow(this.second, 3)) / 2
      }`;
      this.geometric = ` Geometric  averages: ${Math.sqrt(
        Math.abs(this.first) * Math.abs(this.second)
      )}`;
      this.first = null;
      this.second = null;
    }
  }
}
