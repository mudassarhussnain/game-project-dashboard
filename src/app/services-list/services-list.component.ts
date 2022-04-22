import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/custom-work/services/user.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  status='';
  service:any={};
services:any=[];
submitted:false;
addService:FormGroup;
constructor(
  private userService: UserService,
  private formBuilder: FormBuilder
) {

  this.addService=this.formBuilder.group({
name:['',[Validators.required]],
image:['',Validators.required],
description:['',Validators.required]
  });
}

  ngOnInit(): void {
    this.getAllServies();
  }

  getAllServies(){
  this.userService.getAllServices().subscribe(services=>{
      this.services=services;
      // console.log(services)

    })
  }
  get addServiceControl() {  
    return this.addService.controls;  
  } 
  imageToUpload:File=null;
  
  handleImagetoInput(file:FileList){
    this.imageToUpload=file.item(0);
  }

  getAndCreateService(status,id){
    this.addService.reset();
    this.status=status;

    if(status=='updateService'){
      this.userService.getService(id).subscribe(service=>{
        this.service=service;
        this.addService.patchValue({
          id:this.service.id,
          name:this.service.name,
          description:this.service.description,
          image:this.service.image,
        })
      })
    }

  }

deleteService(id){
  this.userService.deleteService(id).subscribe(res=>{
    this.getAllServies();
  })
}
updateService(){
  const formData:FormData=new FormData();
  formData.append('name',this.addService.value.name);
  formData.append('image',this.imageToUpload,this.imageToUpload.name);
  formData.append('description',this.addService.value.description);

  this.userService.updateService(this.addService.value.id,formData).subscribe(data=>{
    this.getAllServies()
  })

}
createService(){
  const formData:FormData=new FormData();
  formData.append('name',this.addService.value.name);
  formData.append('image',this.imageToUpload,this.imageToUpload.name);
  formData.append('description',this.addService.value.description);

  this.userService.createService(formData).subscribe(data=>{
    this.getAllServies()
  })
}
}
