import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character, Movie, Planets, Spaceships, Species, Vehicles } from '../models/models';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  //base url
  baseUrl = "https://swapi.dev/api/"  

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  //GET character by id
  GetCharcaters(id: number): Observable<Character> {
    return this.http
                .get<Character>(this.baseUrl + 'people/' + id)
                .pipe(retry(1), catchError(this.handleError));  
  }

  //GET movie by episode id
  GetMovie(id: number): Observable<Movie> {
    return this.http
                .get<Movie>(this.baseUrl + 'films/' + id)
                .pipe(retry(1), catchError(this.handleError)); 
  }

  GetPlanets(id: number): Observable<Planets> {
    return this.http
                .get<Planets>(this.baseUrl + 'planets/' + id)
                .pipe(retry(1), catchError(this.handleError));  
  }

  GetSpaceships(id: number): Observable<Spaceships> {
    return this.http
                .get<Spaceships>(this.baseUrl + 'starships/' + id)
                .pipe(retry(1), catchError(this.handleError));  
  }

  GetSpecies(id: number): Observable<Species> {
    return this.http
                .get<Species>(this.baseUrl + 'species/' + id)
                .pipe(retry(1), catchError(this.handleError));  
  }

  GetVehicles(id: number): Observable<Vehicles> {
    return this.http
                .get<Vehicles>(this.baseUrl + 'vehicles/' + id)
                .pipe(retry(1), catchError(this.handleError));  
  }

  //Error Handling
  handleError(error: any) {
    let errorMessage = ''; 

    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message; 
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}'; 
    }

    console.log(errorMessage); 
    return throwError(() => {
      return errorMessage; 
    }); 
  }
}
