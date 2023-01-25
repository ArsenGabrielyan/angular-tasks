import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupValidation } from './classes/signup-validation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  frmRegistration!: FormGroup;
  constructor(private frmBuilder: FormBuilder){}
  ngOnInit(): void {
    this.frmRegistration = this.frmBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, SignupValidation.validateEmail]],
      tel: ["", [Validators.required, SignupValidation.validatePhone]],
      bdate: [""],
      pass: ["", [Validators.required, Validators.minLength(8)]],
      confirmPass: ["", [Validators.required, SignupValidation.matchPassword(this.frmRegistration.value.pass)]],
      chkAgreed: [false]
    })
  }
  handleSubmit(){
    alert(JSON.stringify(this.frmRegistration.value))
    this.frmRegistration.reset({name: "",email: "",tel: "",pass: "",confirmPass: "",chkAgreed: false})
  }
}
