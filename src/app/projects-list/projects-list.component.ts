import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'app/custom-work/services/user.service';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
projects:any=[];
project:any={};
modalStatus=''
createProjectForm:FormGroup;
submitted:boolean=false
  constructor(private userService:UserService,private formBuilder:FormBuilder) {
    this.createProjectForm=this.formBuilder.group({
      clientName:['',[Validators.required]],
      projectName:['',[Validators.required]],
      phone:['',[Validators.required]],
      email:['',[Validators.required]],
      status:['',[Validators.required]],
      file:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
    this.getAllProjects();
  }
  get addProject() {  
    return this.createProjectForm.controls;  
  } 

  createProject(){
    this.submitted=true;
    this.userService.createProject(this.createProjectForm.value).subscribe(res=>{
      this.getAllProjects()
    })
  }

  getAllProjects(){
    this.userService.getAllProjects().subscribe(projects=>{
      this.projects=projects;
    })
  }

  getProject(id){
    this.userService.getProject(id).subscribe(project=>{
      this.project=project;

      this.createProjectForm.patchValue({
        clientName:this.project.clientName,
        phone:this.project.phone,
        email:this.project.email,
        projectName:this.project.projectName,
        status:this.project.status,
        file:this.project.file

      })
    })
  }

  deleteProject(id){
    this.userService.deleteProject(id).subscribe(res=>{
      this.getAllProjects();
    })
  }

  updateProject(){
    this.userService.updateProject(this.project.id,this.createProjectForm.value).subscribe(res=>{
      this.getAllProjects()
    })
  }

  updateAndCreateProject(modalStatus,id){
    this.createProjectForm.reset()
    this.modalStatus=modalStatus;
    if(modalStatus=='updateProject'){
      this.getProject(id);
    }

  }
}
