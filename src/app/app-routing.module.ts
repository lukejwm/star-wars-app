import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpaceshipsComponent } from './pages/spaceships/spaceships.component';
import { SpeciesComponent } from './pages/species/species.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' }, 
  { path: 'movies', component: MoviesComponent },
  { path: 'charcaters', component: CharactersComponent },
  { path: 'spaceships', component: SpaceshipsComponent }, 
  { path: 'planets', component: PlanetsComponent }, 
  { path: 'vehicles', component: VehiclesComponent }, 
  { path: 'species', component: SpeciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
