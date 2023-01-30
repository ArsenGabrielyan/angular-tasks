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

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.frmRegistration = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, SignupValidation.validateEmail]],
      tel: ['', [Validators.required, SignupValidation.validatePhone]],
      bdate: ['', [Validators.required, SignupValidation.validateBday]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', [Validators.required, Validators.minLength(8)]],
      chkAgreed: [false, [Validators.requiredTrue]]
    },{
      validator: [SignupValidation.matchPassword("pass", "confirmPass")]
    })
  }
  
  handleSubmit(){
    alert(JSON.stringify(this.frmRegistration.value))
    this.frmRegistration.reset({
      name: "",
      email: "",
      tel: "",
      bdate: "",
      pass: "",
      confirmPass: "",
      chkAgreed: false
    })
  }
}