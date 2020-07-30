import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Ipo } from '../Models/ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  editIpo:Ipo;
  constructor(private http:HttpClient) { }

  path=environment.adminPath;

  public GetAllIpo():Observable<Ipo[]>{
    return this.http.get<Ipo[]>(this.path+'/Ipo/GetAllIpo')
  }

  public GetIpo(name:string):Observable<any>{
    return this.http.get<any>(this.path+'/Ipo/GetIpo/'+name);
  }

  public Register(user: Ipo):Observable<any> {
    return this.http.post(this.path+`/Ipo/AddIpo`, user);
  }

  public Update(user: Ipo):Observable<any> {
      return this.http.put(this.path+`/Ipo/UpdateIpo`, user);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(this.path+`/Ipo/DeleteIpo/` + id);
  }
}

