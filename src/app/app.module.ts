import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { StarwarsService } from './services/starwars.service.ts.service';
import { MoviesComponent } from './pages/movies/movies.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { SpaceshipsComponent } from './pages/spaceships/spaceships.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { SpeciesComponent } from './pages/species/species.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CharactersComponent,
    SpaceshipsComponent,
    PlanetsComponent,
    VehiclesComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    StarwarsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
