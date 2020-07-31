import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/Models/ipo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoService } from 'src/app/Services/ipo.service';

@Component({
  selector: 'app-ipo-update-view',
  templateUrl: './ipo-update-view.component.html',
  styleUrls: ['./ipo-update-view.component.css']
})
export class IpoUpdateViewComponent implements OnInit {
  submitted=false;
  registerForm: FormGroup;
  ipo:Ipo;
  editIpo;
    constructor(private formBuilder: FormBuilder,private service:IpoService) {
    }
  
    ngOnInit(): void {
       this.editIpo=JSON.parse(localStorage.getItem("editIpo"));
       localStorage.removeItem("editIpo");
        this.registerForm = this.formBuilder.group({
          id: [this.editIpo.id, [Validators.required]],
          companyName: [this.editIpo.companyName, [Validators.required]],
          stockExchange: [this.editIpo.stockExchange, [Validators.required]],
          pricePerShare: [this.editIpo.pricePerShare, [Validators.required]],
          noOfShares: [this.editIpo.noOfShares, [Validators.required]],
          openDateTime: [this.editIpo.openDateTime, [Validators.required]],
          remarks: [this.editIpo.remarks, [Validators.required]],

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
        this.service.Update(this.ipo).subscribe(i=>{
            console.log(i);
            
          },
          error => {
            console.log(error);
          });
  
          location.reload();
    }
}
