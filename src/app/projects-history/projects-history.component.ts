import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/custom-work/services/user.service';

@Component({
  selector: 'app-projects-history',
  templateUrl: './projects-history.component.html',
  styleUrls: ['./projects-history.component.scss']
})
export class ProjectsHistoryComponent implements OnInit {

  projects:any=[];
  project:any={};
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
      this.getAllProjects()
    }

    get projectHistory() {  
      return this.createProjectForm.controls;  
    } 
  
    getAllProjects(){
      this.userService.getProjectsHistory().subscribe(projects=>{
        this.projects=projects;
      })
    }
  
    getProject(id){
      this.userService.getProjectHistory(id).subscribe(project=>{
        this.project=project;
  
        this.project.patchValue({
          clientName:this.project.clientName,
          projectName:this.project.projectName,
          phone:this.project.phone,
          email:this.project.email,
          status:this.project.status,
          file:this.project.file
  
        })
      })
    }
  
    deleteProject(id){
      this.userService.deleteProjectHistory(id).subscribe(res=>{
        this.getAllProjects();
      })
    }
  

}
