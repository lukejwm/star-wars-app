import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service.ts.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['../shared/shared.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicle: any; 

  constructor(private swService: StarwarsService) { }

  ngOnInit(): void {
    this.swService.GetVehicles(14).subscribe((data) => {
      console.log(data);
      this.vehicle = data; 
    })
  }
}
