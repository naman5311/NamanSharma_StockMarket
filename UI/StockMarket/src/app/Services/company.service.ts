import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Company } from '../Models/company';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
editCompany:Company;
  constructor(private http:HttpClient) { }

  path=environment.adminPath;

  public GetAllCompany():Observable<Company[]>{
    return this.http.get<Company[]>(this.path+'/Company/GetAllCompany')
  }

  public GetCompany(name:string):Observable<any>{
    return this.http.get<any>(this.path+'/Company/GetCompany/'+name);
  }

  public Register(user: Company):Observable<any> {
    return this.http.post(this.path+`/Company/AddCompany`, user);
  }

  public Update(user: Company):Observable<any> {
      return this.http.put(this.path+`/Company/UpdateCompany`, user);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(this.path+`/Company/DeleteCompany/` + id);
  }
}
