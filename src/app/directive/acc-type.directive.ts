import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccType } from '../enums/acc-type';

@Directive({
  selector: '[accountType]'
})
export class AccTypeDirective {
  adminAccess = false;
  accType = AccType;
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  @Input() set accountType(type: string){
    if(type === this.accType.Admin){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.adminAccess = true;
    } else if(type === this.accType.User){
      this.viewContainer.clear();
      this.adminAccess = false;
    }
  }
} 
