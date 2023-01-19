import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesAppComponent } from './notes-app.component';

const routes: Routes = [{path: "",component: NotesAppComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesAppRoutingModule { }