import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "notes", loadChildren: ()=>import("./modules/notes-app/notes-app.module").then(m=>m.NotesAppModule)},
  {path: "to-do-list", loadChildren: ()=>import("./modules/to-do-list/to-do-list.module").then(m=>m.ToDoListModule)},
  {path: "weather", loadChildren: ()=>import("./modules/weather-app/weather-app.module").then(m=>m.WeatherAppModule)},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
