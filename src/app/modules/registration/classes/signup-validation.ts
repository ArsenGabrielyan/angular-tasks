import { AbstractControl, ValidationErrors } from "@angular/forms";

export class SignupValidation {
     static validateEmail(control: AbstractControl): ValidationErrors | null{
          const val = control.value as string,
          pat: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(!pat.test(val)) return {invalidEmail: true};
          return null;
     }
     static validatePhone(control: AbstractControl): ValidationErrors | null{
          const val = control.value as string,
          regex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;
          if(!regex.test(val)) return {invalidPhoneNum: true};
          return null
     }
     static matchPassword(pass: string){
          return (control: AbstractControl): ValidationErrors | null => {
               const val = control.value as string;
               if(val.length <= 8) return {passReachedMin: true}
               else if(pass !== val) return {passNotMatched: true}
               return null;
          }
     }
}