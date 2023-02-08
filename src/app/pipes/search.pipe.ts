import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(val: any, term: string){
    if(term==="") return val;
    return val.filter((el:any)=>{
      return (
        el.name.toLowerCase().includes(term.toLowerCase()) ||
        el.desc.toLowerCase().includes(term.toLowerCase()) ||
        el.unit.toLowerCase().includes(term.toLowerCase()) 
      )
    });
  }
}