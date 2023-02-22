import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { IAnimals } from "./animals";

export interface ZooModel{
     getAnimal: IAnimals[],
     addAnimal: IAnimals[]
}

@State<ZooModel>({
     name: "zoo",
     defaults: {
          getAnimal: [],
          addAnimal: []
     }
})
@Injectable()
export class ZooState{

}