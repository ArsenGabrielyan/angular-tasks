import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { IAnimals } from "./animals";
import { AddAnimal } from "./animals.action";

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
     count=0
     @Action(AddAnimal)
     addAnimal(ctx: StateContext<ZooModel>, action: AddAnimal){
          const state = ctx.getState();
          const item: IAnimals = {name: action.name, id: this.count++};
          state.addAnimal.push(item);
          ctx.setState({
               ...state,
               addAnimal: [...state.addAnimal]
          })
          console.log(state.addAnimal);
     }
}