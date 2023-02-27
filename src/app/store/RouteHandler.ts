import { Injectable } from "@angular/core";
import { Actions, ofActionDispatched } from "@ngxs/store";
import { AddAnimal } from "./animals.action";

@Injectable({providedIn: "root"})
export class RouteHandler{
     constructor(private actions$: Actions){
          this.actions$
          .pipe(ofActionDispatched(AddAnimal))
          .subscribe(({name})=>console.log("Added New Animal: " + name))
     }
}