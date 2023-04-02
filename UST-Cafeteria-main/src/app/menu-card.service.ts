import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeRegService {

  // constructor() { }
  constructor(private http:HttpClient) { }

  public doRegistration(user: any){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }
  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }
  public getUserByEmail(email: string){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }
  public deleteUser(id: string){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}

