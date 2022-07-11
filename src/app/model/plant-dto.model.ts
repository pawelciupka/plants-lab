import { RichText } from "src/common/model/rich-text.model";

export class PlantDto {
  public id!: string;
  public nazwa!: string;
  public cena!: number;
  public opis!: RichText;
}
