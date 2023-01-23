import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { FormsModule } from '@angular/forms';
import { NoSpaceValidationDirective } from './directives/no-space-validation.directive';



@NgModule({
  declarations: [ToDoListComponent, NoSpaceValidationDirective],
  imports: [
    CommonModule,
    FormsModule,
    ToDoListRoutingModule
  ]
})
export class ToDoListModule { }
