import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ViewMovieComponent } from './components/view-movie/view-movie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-movie' }, 
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'edit-movie/:name', component: EditMovieComponent },
  { path: 'view-movie/:id', component: ViewMovieComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
