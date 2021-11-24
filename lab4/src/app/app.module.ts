import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WordComponent } from "./Word/word.component";
import {ChildCo} from "./child-comp";

@NgModule({
    declarations: [
        AppComponent,
        WordComponent,
        ChildCo,
    ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
