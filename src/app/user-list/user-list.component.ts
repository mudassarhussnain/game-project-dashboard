import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "app/custom-work/services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  usersList: any = [];
  submitted = false; 
  editUser: FormGroup;

  user: any = {};
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.editUser = this.formBuilder.group({
      firstName: ["",[Validators.required]],
      lastName: ["",[Validators.required]],
      phone: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(16)]],
      email: ["",[Validators.required,Validators.email]],
      zipCode: ["",[Validators.required]],
      city: ["",[Validators.required]],
      country: ["",[Validators.required]],
    });
  }

  ngOnInit() {
    this.getAllUsers();
  }
  get editUserControl() {  
    return this.editUser.controls;  
  } 

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.usersList = response;
      console.log(response);
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((res) => {
      // console.log(res)
      this.getAllUsers();
    });
  }

  getUser(id) {
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
      this.editUser.patchValue({
        id: this.user.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phone: this.user.phone,
        email: this.user.email,
        zipCode: this.user.zipCode,
        city: this.user.city,
        country: this.user.country,
      });
    });
  }

  updateUser(){
    this.submitted = true; 
    this.userService.updateUser(this.user.id,this.editUser.value).subscribe(user=>{
     this.getAllUsers();
    })
  }
}
