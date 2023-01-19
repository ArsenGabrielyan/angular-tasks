import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';



@NgModule({
  declarations: [ToDoListComponent],
  imports: [
    CommonModule,
    ToDoListRoutingModule
  ]
})
export class ToDoListModule { }
