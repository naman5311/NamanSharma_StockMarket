import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Company } from '../Models/company';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  path=environment.adminPath;

  public GetAllCompany():Observable<Company[]>{
    return this.http.get<Company[]>(this.path+'/Company/GetAllCompany')
  }

  public GetCompany(name:string):Observable<Company>{
    return this.http.get<Company>(this.path+'/Company/GetCompany/'+name);
  }

  public Register(user: Company):Observable<any> {
    return this.http.post(this.path+`/AddUser`, user);
  }

  public Update(user: Company):Observable<any> {
      return this.http.put(`/users/UpdateUser`, user);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(`/users/DeleteUser` + id);
  }
}
