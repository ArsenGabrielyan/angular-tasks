import { ElementRef, Pipe, PipeTransform, ViewChild } from '@angular/core';

@Pipe({
  name: 'validationMsg'
})
export class ValidationMsgPipe implements PipeTransform {
  transform(value: any){
    if(!value) return;
    if(value.required) return "This field is Required";
    if(value.minlength) return "Name Should be More Than 2 Chars";
    if(value.hasAnySpaces) return "Remove any Spaces";
    return "";
  }
}