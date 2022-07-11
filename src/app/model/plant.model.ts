import { PlantDto } from "./plant-dto.model";

export class Plant {
  public id: string;
  public name: string;
  public price: number;
  public descriptionHtml: string;

  constructor(dto: PlantDto) {
    this.id = dto.id;
    this.name = dto.nazwa;
    this.price = dto.cena;
    this.descriptionHtml = dto.opis.html;
  }
}
