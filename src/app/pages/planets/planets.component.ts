import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service.ts.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['../shared/shared.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: any; 

  constructor(private swService: StarwarsService) { }

  ngOnInit(): void {
    this.swService.GetPlanets(1).subscribe((data) => {
      console.log(data);
      this.planets = data; 
    })
  }
}
