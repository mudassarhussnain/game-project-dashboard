import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm:FormGroup;
  submitted:boolean=false;
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      mobile:[null,[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      country:['',[Validators.required]],
      zipCode:[null,[Validators.required]],
      Roleid:[null,[Validators.required]],
    })
  }


  get registerFormControl() {  
    return this.signupForm.controls;  
  }
  
  onSubmit(){
    this.submitted=true;
  }
}
