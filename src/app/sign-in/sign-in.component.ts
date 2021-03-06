import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitted:boolean=false;
  constructor(private formBuilder:FormBuilder) { }
signinForm:FormGroup;
  ngOnInit(): void {
    this.signinForm=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  get signinFormControl() {  
    return this.signinForm.controls;  
  } 

  onSubmit(){
    this.submitted=true;
  }
}
