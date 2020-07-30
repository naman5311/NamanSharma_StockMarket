import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-landing-view',
  templateUrl: './admin-landing-view.component.html',
  styleUrls: ['./admin-landing-view.component.css']
})
export class AdminLandingViewComponent implements OnInit {
companyView=false;

  constructor() { }

  ngOnInit(): void {
  }

  onCompanyClick(){
    this.companyView=!this.companyView;
  }

}
