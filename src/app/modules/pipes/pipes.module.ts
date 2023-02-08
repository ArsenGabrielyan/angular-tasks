import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMsgPipe } from 'src/app/pipes/validation-msg.pipe';

@NgModule({
  declarations: [ValidationMsgPipe],
  imports: [CommonModule],
  exports: [ValidationMsgPipe]
})
export class PipesModule { }