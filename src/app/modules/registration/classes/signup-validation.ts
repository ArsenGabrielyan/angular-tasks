import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import * as dayjs from "dayjs";

export class SignupValidation {
     static validateEmail(control: AbstractControl): ValidationErrors | null{
          const val = control.value as string,
          pat: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(!pat.test(val)) {
               return {invalidEmail: true};
          }
          return null;
     }
     static validatePhone(control: AbstractControl): ValidationErrors | null{
          const val = control.value as string,
          regex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;
          if(!regex.test(val)) {
               return {invalidPhoneNum: true};
          }
          return null;
     }
     static matchPassword(src: string, target: string){
          return (fg: FormGroup) => {
               const srcVal = fg.get(src)?.value;
               const targetVal = fg.get(target)?.value;
               if(srcVal !== targetVal) {
                    fg.get(target)?.setErrors({mismatch: true});
               } else {
                    fg.get(target)?.setErrors(null);
               }
          }
     }
     static validateBday(control: AbstractControl){
          const val = control.value as string;
          const regex = /^\d{4}-\d{2}-\d{2}$/;
          const now: Date = new Date();
          const year = parseInt(val.split("-")[0],10);
          const currYear = now.getFullYear();
          const age = currYear - year;
          if(
               !regex.test(val) ||
               (age < 18 || age > 80) ||
               dayjs().isBefore(val)
          ){
               return {invalidAge: true};
          } else {
               return null;
          }
     }
}