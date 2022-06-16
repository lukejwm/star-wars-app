import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service.ts.service';
@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.component.html',
  styleUrls: ['../shared/shared.component.css']
})
export class SpaceshipsComponent implements OnInit {

  spaceships: any; 

  constructor(private swService: StarwarsService) { }

  ngOnInit(): void {
    this.swService.GetSpaceships(12).subscribe((data) => {
      console.log(data);
      this.spaceships = data; 
    })
  }
}
