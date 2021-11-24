import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MathComponent } from "./Math/math.component";
import { UserComponent } from "./User/user.component";
import { ImgComponent } from "./Img/img.component";
import { WordComponent } from "./Word/word.component";
import { EquationComponent } from "./Equation/equation.component";
import { TriangleComponent } from "./Triangle/triangle.component";
import { CircleComponent } from "./Circle/circle.component";
import { AverageComponent } from "./Average/average.component";
import { BuyComponent } from "./Buy/buy.component";

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    UserComponent,
    ImgComponent,
    WordComponent,
    EquationComponent,
    TriangleComponent,
    CircleComponent,
    AverageComponent,
    BuyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
