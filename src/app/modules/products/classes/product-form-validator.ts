import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ProductFormValidator {
     static unitValidation(control: AbstractControl): ValidationErrors | null{
          const value = control.value as string;
          if(value.trim()===""){
               return {hasAnySpaces: true}
          }
          return null
     }
}
