import { SupplyColor } from "../enums/supply-color.enum";
import { SupplyType } from "../enums/supply-type.enum";

export class Supply {
  constructor(
    public id: string,
    public model: string,
    public description: string,
    public type: SupplyType,
    public color: SupplyColor,
    public image: string,
    public price: number
  ) {}

}