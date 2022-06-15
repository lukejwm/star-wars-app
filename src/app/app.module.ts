import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ViewMovieComponent } from './components/view-movie/view-movie.component';

import { StarwarsService } from './services/starwars.service.ts.service';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    EditMovieComponent,
    ViewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
