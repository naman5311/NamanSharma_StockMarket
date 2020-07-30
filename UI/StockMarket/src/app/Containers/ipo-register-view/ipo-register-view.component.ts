import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/Models/ipo';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IpoService } from 'src/app/Services/ipo.service';

@Component({
  selector: 'app-ipo-register-view',
  templateUrl: './ipo-register-view.component.html',
  styleUrls: ['./ipo-register-view.component.css']
})
export class IpoRegisterViewComponent implements OnInit {
  submitted=false;
  registerForm: FormGroup;
  ipo:Ipo;
    constructor(private formBuilder: FormBuilder,private service:IpoService) { }
  
    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        id: ['', [Validators.required]],
        companyName: ['', [Validators.required]],
        stockExchange: ['', [Validators.required]],
        pricePerShare: ['', [Validators.required]],
        noOfShares: ['', [Validators.required]],
        openDateTime: ['', [Validators.required]],
        remarks: ['', [Validators.required]],
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
        this.ipo=new Ipo();
        this.ipo.Id=this.f.id.value;
        this.ipo.CompanyName=this.f.companyName.value;
        this.ipo.StockExchange=this.f.stockExchange.value;
        this.ipo.PricePerShare=this.f.pricePerShare.value;
        this.ipo.NoOfShares=this.f.noOfShares.value;
        this.ipo.OpenDateTime=this.f.openDateTime.value;
        this.ipo.Remarks=this.f.remarks.value;
        this.service.Register(this.ipo).subscribe(i=>{
            console.log(i);
            
          },
          error => {
            
          });
  
        //location.reload();
    }
}