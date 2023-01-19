import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccType } from '../enums/acc-type';

@Directive({
  selector: '[accType]'
})
export class AccTypeDirective {
  adminAccess = false;
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  @Input() set accountType(type: string){
    if(type === AccType.Admin){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.adminAccess = true;
    } else if(type = AccType.User){
      this.viewContainer.clear();
      this.adminAccess = false;
    }
  }
} 
