import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteVotersComponent } from './favorite-voters/favorite-voters.component';
import { VotersComponent } from './voters/voters.component';

const routes: Routes = [
  // { path: 'voters', component: VotersComponent},
  // { path: 'favorite_voters', component: FavoriteVotersComponent},
  // { path: '', redirectTo: '/voters', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
