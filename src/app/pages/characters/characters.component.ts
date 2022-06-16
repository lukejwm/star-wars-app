import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/models';
import { StarwarsService } from 'src/app/services/starwars.service.ts.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['../shared/shared.component.css']
})
export class CharactersComponent implements OnInit {

  character: any; 

  constructor(private swService: StarwarsService) { }

  ngOnInit(): void {
    this.swService.GetCharcaters(1).subscribe((data) => {
      console.log(data);
      this.character = data; 
    })
  }
}
