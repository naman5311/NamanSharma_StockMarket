import { Component, OnInit } from '@angular/core';  
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Stockprice } from 'src/app/Models/stockprice';

@Component({
  selector: 'app-compare-company-view',
  templateUrl: './compare-company-view.component.html',
  styleUrls: ['./compare-company-view.component.css']
})
export class CompareCompanyViewComponent implements OnInit {

  url = 'http://localhost:5003/api/StockPrice/GetStockPrices/';  
  data: Stockprice[];  
  Player = [];  
  Run = [];  
  Linechart = [];  
  constructor(private httpClient: HttpClient) { }  
  ngOnInit() {  
    this.httpClient.get(this.url+"Yes Bank").subscribe((result: Stockprice[]) => {  
      result.forEach(x => {  
        this.Player.push(x.date);  
        this.Run.push(x.currentPrice);  
      });  
      this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.Player,  
          datasets: [  
            {  
              data: this.Run,  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }  
}
