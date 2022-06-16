import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service.ts.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['../shared/shared.component.css']
})
export class SpeciesComponent implements OnInit {

  species: any; 

  constructor(private swService: StarwarsService) { }

  ngOnInit(): void {
    this.swService.GetSpecies(1).subscribe((data) => {
      console.log(data);
      this.species = data; 
    })
  }
}
