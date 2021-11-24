import { Component } from "@angular/core";

@Component({
  selector: "app-circle",
  templateUrl: "./circle.component.html",
  styleUrls: ["./circle.component.css"],
})
export class CircleComponent {
  public radius: number | null = null;
  public lenghtOk: string | null = null;
  public sCircle: string | null = null;
  public vCircle: string | null = null;

  inputRadius(event: any) {
    this.radius = Number(event.target.value);
  }

  calculation() {
    if (this.radius) {
      this.lenghtOk = `Circumference length: ${2 * Math.PI * this.radius}`;
      this.sCircle = `Area of the circle: ${
        Math.PI * Math.pow(this.radius, 2)
      }`;
      this.vCircle = `Volume of the ball: ${
        (4 / 3) * Math.PI * Math.pow(this.radius, 3)
      } `;
      this.radius = null;
    }
  }
}
