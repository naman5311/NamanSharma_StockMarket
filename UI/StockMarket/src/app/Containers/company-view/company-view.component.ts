import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/company.service';
import { Company } from 'src/app/Models/company';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {
companyList:Company[];
addCompanyClicked=false;
editCompanyClicked=false;
  constructor(private service:CompanyService) { 
    this.service.GetAllCompany().subscribe(i=>{
      this.companyList=i;
      console.log(i);
    })

  }

  ngOnInit(): void {
  }

  onEdit(){
    this.addCompanyClicked=false;
    this.editCompanyClicked=true;
  }
  onAdd(){
    this.editCompanyClicked=false;
    this.addCompanyClicked=true;
  }
}
