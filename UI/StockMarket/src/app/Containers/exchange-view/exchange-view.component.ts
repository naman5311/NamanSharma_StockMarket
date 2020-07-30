import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/Models/exchange';
import { ExchangeService } from 'src/app/Services/exchange.service';

@Component({
  selector: 'app-exchange-view',
  templateUrl: './exchange-view.component.html',
  styleUrls: ['./exchange-view.component.css']
})
export class ExchangeViewComponent implements OnInit {
  exchangeList:Exchange[];
  item:Exchange;
  addExchangeClicked=false;
  editExchangeClicked=false;
    constructor(private service:ExchangeService) { 
      this.service.GetAllExchange().subscribe(i=>{
        this.exchangeList=i;
        console.log(i);
      })
  
    }
  
    ngOnInit(): void {
    }
  
    onEdit(item){
      localStorage.setItem("editExchange",JSON.stringify(item));
      this.service.editExchange=item;
      this.addExchangeClicked=false;
      this.editExchangeClicked=true;
    }
    onAdd(){
      this.editExchangeClicked=false;
      this.addExchangeClicked=true;
    }
    onDelete(id){
      this.service.Delete(id).subscribe(i=>{
        console.log(i);
      })
      //location.reload();
    }
  }
  