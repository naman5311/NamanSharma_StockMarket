import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/Models/company';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-company-update-view',
  templateUrl: './company-update-view.component.html',
  styleUrls: ['./company-update-view.component.css']
})
export class CompanyUpdateViewComponent implements OnInit {
  submitted=false;
  registerForm: FormGroup;
  company:Company;
  company1:Company;
    constructor(private formBuilder: FormBuilder,private service:CompanyService) { }
  
    ngOnInit(): void {
       //this.company1=this.service.GetCompany("R");
        this.registerForm = this.formBuilder.group({
          companyName: ['', [Validators.required]],
          turnover: ['', [Validators.required]],
          ceo: ['', [Validators.required]],
          boardOfDirectors: ['', [Validators.required]],
          listedInSe: ['', [Validators.required]],
          sector: ['', [Validators.required]],
          stockCode: ['', [Validators.required]],

      });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
  
    onSubmit() {
        this.submitted = true;
  
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.company=new Company();
        this.company.CompanyName=this.f.companyName.value;
        this.company.Turnover=this.f.turnover.value;
        this.company.Ceo=this.f.ceo.value;
        this.company.BoardOfDirectors=this.f.boardOfDirectors.value;
        this.company.ListedInSe=this.f.listedInSe.value;
        this.company.Sector=this.f.sector.value;
        this.company.StockCode=this.f.stockCode.value;
        this.service.Update(this.company).subscribe(i=>{
            console.log(i);
            
          },
          error => {
            
          });
  
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}
