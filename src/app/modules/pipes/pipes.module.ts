import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMsgPipe } from 'src/app/pipes/validation-msg.pipe';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@NgModule({
  declarations: [ValidationMsgPipe,SearchPipe],
  imports: [CommonModule],
  exports: [ValidationMsgPipe,SearchPipe]
})
export class PipesModule { }