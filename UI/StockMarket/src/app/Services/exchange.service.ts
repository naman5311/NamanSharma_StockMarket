import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Exchange } from '../Models/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  editExchange:Exchange;
  constructor(private http:HttpClient) { }

  path=environment.adminPath;

  public GetAllExchange():Observable<Exchange[]>{
    return this.http.get<Exchange[]>(this.path+'/StockExchange/GetAllStockExchange')
  }

  public GetExchange(name:string):Observable<any>{
    return this.http.get<any>(this.path+'/StockExchange/GetStockExchange/'+name);
  }

  public Register(user: Exchange):Observable<any> {
    return this.http.post(this.path+`/StockExchange/AddStockExchange`, user);
  }

  public Update(user: Exchange):Observable<any> {
      return this.http.put(this.path+`/StockExchange/UpdateStockExchange`, user);
  }

  public Delete(id: number):Observable<any> {
      return this.http.delete(this.path+`/StockExchange/DeleteStockExchange/` + id);
  }
}
