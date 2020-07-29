import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginViewComponent } from './Containers/user-login-view/user-login-view.component';


const routes: Routes = [
  
  {path:'SignIn',component:UserLoginViewComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
