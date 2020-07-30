import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from '../Models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  path:string=environment.path
  public Login(email:string,password:string):Observable<any>{
    return this.http.get<User[]>(this.path+"/Login/"+email+"/"+password);
  }

  public Register(user: User):Observable<any> {
    return this.http.post(this.path+`/AddUser`, user);
  }

  public Update(user: User):Observable<any> {
      return this.http.put(`/users/UpdateUser`, user);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(`/users/DeleteUser` + id);
  }
}
