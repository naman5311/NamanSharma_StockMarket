import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.css']
})
export class SignupViewComponent implements OnInit {
  submitted=false;
registerForm: FormGroup;
user:User;
  constructor(private formBuilder: FormBuilder,private service:UserService) { }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        userName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required,Validators.minLength(6)]],
        mobileNo: ['', [Validators.required]]
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
      this.user.Email=this.f.email.value;
      this.user.Password=this.f.password.value;
      this.user.UserName=this.f.userName.value;
      this.user.MobileNo=this.f.mobileNo.value;
      this.user.Confirmed="true"
      this.user.UserType="user"
      this.service.Register(this.user).subscribe(i=>{
          console.log(i);
          
        },
        error => {
          
        });

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
