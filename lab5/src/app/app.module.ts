import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DialogComponent } from './dialog/dialog.component';

import { Users } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TabsComponent,
    FavoritesComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [Users],
  bootstrap: [AppComponent]
})
export class AppModule { }
