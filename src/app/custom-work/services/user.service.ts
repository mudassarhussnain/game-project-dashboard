import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get("http://localhost:3000/posts")
  }

  deleteUser(userId){
    return this.httpClient.delete("http://localhost:3000/posts/"+userId)
  }
  getUser(userId){
    return this.httpClient.get("http://localhost:3000/posts/"+userId)
  }


  updateUser(userId,data){
    return this.httpClient.put("http://localhost:3000/posts/"+userId,data)
  }

  getAllServices(){
    return this.httpClient.get("http://localhost:3000/services")
  }

  deleteService(id){
    return this.httpClient.delete("http://localhost:3000/services/"+id)
  }

  getService(id){
    return this.httpClient.get("http://localhost:3000/services/"+id)
  }

  updateService(id,data){
    return this.httpClient.put("http://localhost:3000/services/"+id,data)
  }

  createService(data){
    return this.httpClient.post("http://localhost:3000/services/",data)
  }

  getAllProjects(){
    return this.httpClient.get("http://localhost:3000/projects")
  }

  getProject(id){
    return this.httpClient.get("http://localhost:3000/projects/"+id)
  }

  deleteProject(id){
    return this.httpClient.delete("http://localhost:3000/projects/"+id)
  }
  deleteProjectHistory(id){
    return this.httpClient.delete("http://localhost:3000/projects/"+id)
  }

  getProjectsHistory(){
    return this.httpClient.get("http://localhost:3000/history")
  }

  getProjectHistory(id){
    return this.httpClient.get("http://localhost:3000/history"+id)
  }

  updateProject(id,data){
    return this.httpClient.put("http://localhost:3000/projects/"+id,data)
  }

  createProject(data){
    return this.httpClient.post("http://localhost:3000/history",data)
  }


}
