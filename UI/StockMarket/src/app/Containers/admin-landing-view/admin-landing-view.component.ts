import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing-view',
  templateUrl: './admin-landing-view.component.html',
  styleUrls: ['./admin-landing-view.component.css']
})
export class AdminLandingViewComponent implements OnInit {
companyView=false;
exchangeView=false;
ipoView=false;
importView=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onCompanyClick(){
    this.companyView=!this.companyView;
    this.ipoView=false;
    this.exchangeView=false;
    this.importView=false;
  }
  onExchangeClick(){
    this.exchangeView=!this.exchangeView;
    this.companyView=false;
    this.ipoView=false;
    this.importView=false;
  }
  onIpoClick(){
    this.ipoView=!this.ipoView;
    this.companyView=false;
    this.exchangeView=false;
    this.importView=false;
  }
  onImportClick(){
    this.importView=!this.importView;
    this.companyView=false;
    this.exchangeView=false;
    this.ipoView=false;
  }
  onLogOutClick(){
    localStorage.clear();
    this.router.navigateByUrl("/SignIn");
  }
  

}
