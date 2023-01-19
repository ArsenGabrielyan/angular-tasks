import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesAppRoutingModule } from './notes-app-routing.module';
import { NotesAppComponent } from './notes-app.component';


@NgModule({
  declarations: [
    NotesAppComponent
  ],
  imports: [
    CommonModule,
    NotesAppRoutingModule
  ]
})
export class NotesAppModule { }
