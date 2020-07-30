import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/company.service';
import { Company } from 'src/app/Models/company';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {
companyList:Company[];
item:Company;
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

  onEdit(item){
    localStorage.setItem("editCompany",JSON.stringify(item));
    this.service.editCompany=item;
    this.addCompanyClicked=false;
    this.editCompanyClicked=true;
  }
  onAdd(){
    this.editCompanyClicked=false;
    this.addCompanyClicked=true;
  }
  onDelete(name){
    this.service.Delete(name).subscribe(i=>{
      console.log(i);
    })
    location.reload();
  }
}
