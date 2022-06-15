import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie';
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

  //GET movie by episode id
  GetMovie(id: number): Observable<Movie> {
    return this.http
                .get<Movie>(this.baseUrl + '/films/' + id)
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
