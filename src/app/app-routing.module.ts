import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "notes", loadChildren: ()=>import("./modules/notes-app/notes-app.module").then(m=>m.NotesAppModule)},
  {path: "to-do-list", loadChildren: ()=>import("./modules/to-do-list/to-do-list.module").then(m=>m.ToDoListModule)},
  {path: "weather", loadChildren: ()=>import("./modules/weather-app/weather-app.module").then(m=>m.WeatherAppModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
