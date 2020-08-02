import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-landing-view',
  templateUrl: './user-landing-view.component.html',
  styleUrls: ['./user-landing-view.component.css']
})
export class UserLandingViewComponent implements OnInit {
  compareCompanyView=false;
  ipoView=false;
  otherView=false;
    constructor() { }
  
    ngOnInit(): void {
    }
  
    onCompareCompanyClick(){
      this.compareCompanyView=!this.compareCompanyView;
      this.ipoView=false;
      this.otherView=false;
    }
    
    onIpoClick(){
      this.ipoView=!this.ipoView;
      this.compareCompanyView=false;
      this.otherView=false;
    }
    onOtherClick(){
      this.otherView=!this.otherView;
      this.compareCompanyView=false;
      this.ipoView=false;
    }
    
  
  }