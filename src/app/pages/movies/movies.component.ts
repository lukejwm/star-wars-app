import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service.ts.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['../shared/shared.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any; 

  constructor(private swService: StarwarsService) { }

  ngOnInit(): void {
    this.swService.GetMovie(1).subscribe((data) => {
      console.log(data);
      this.movies = data; 
    })
  }
}
