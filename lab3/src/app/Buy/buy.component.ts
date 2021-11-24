import { Component } from "@angular/core";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.css"],
})
export class BuyComponent {
  public cost: number | null = null;
  public result: number | null = null;

  inputCost(event: any) {
    this.cost = Number(event.target.value);
  }

  calculation() {
    if (this.cost) {
      if (typeof this.result === "number") {
        this.result = this.result + this.cost;
      } else {
        this.result = this.cost;
      }
    }
    this.cost = null;
  }
}
