import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VotersComponent } from './voters/voters.component';
import { VoterService } from './services/voter.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { VoterFullInfoComponent } from './voter-full-info/voter-full-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FavoriteVoterService } from './services/favorite-voter.service';
import { FavoriteVotersComponent } from './favorite-voters/favorite-voters.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    VotersComponent,
    VoterFullInfoComponent,
    FavoriteVotersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [
    VoterService,
    FavoriteVoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
