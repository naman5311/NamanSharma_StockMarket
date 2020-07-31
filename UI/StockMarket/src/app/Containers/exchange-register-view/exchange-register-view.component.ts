import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/Models/exchange';
import { ExchangeService } from 'src/app/Services/exchange.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exchange-register-view',
  templateUrl: './exchange-register-view.component.html',
  styleUrls: ['./exchange-register-view.component.css']
})
export class ExchangeRegisterViewComponent implements OnInit {
  submitted=false;
  registerForm: FormGroup;
  exchange:Exchange;
    constructor(private formBuilder: FormBuilder,private service:ExchangeService) { }
  
    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        
        stockExchangeName: ['', [Validators.required]],
        brief: ['', [Validators.required]],
        contactAddress: ['', [Validators.required]],
        remarks: ['', [Validators.required]],

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
        this.exchange=new Exchange();
        this.exchange.StockExchangeName=this.f.stockExchangeName.value;
        this.exchange.Brief=this.f.brief.value;
        this.exchange.ContactAddress=this.f.contactAddress.value;
        this.exchange.Remarks=this.f.remarks.value;
        this.service.Register(this.exchange).subscribe(i=>{
            console.log(i);
            
          },
          error => {
            console.log(error);
          });
  
        location.reload();
    }
}