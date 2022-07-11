import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { PlantDto } from '../model/plant-dto.model';
import { Plant } from '../model/plant.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public plants: Plant[] = [];

  constructor(private _apollo: Apollo) { }

  ngOnInit(): void {
    this.init();
  }

  private init():void {
    this._apollo
    .watchQuery({
      query: gql`
      {
        rosliny(orderBy: publishedAt_ASC) {
          id
          nazwa
          opis {
            html
          }
          cena
        }
      }`  
    })
    .valueChanges.subscribe((result: any) => {
      console.log('result', result);
      result.data.rosliny.forEach((plantDto: PlantDto) => {
        this.plants.push(new Plant(plantDto))
      });
      console.log(this.plants);
    });
  }

}
