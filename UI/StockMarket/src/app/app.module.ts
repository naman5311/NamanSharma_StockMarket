import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginViewComponent } from './Containers/user-login-view/user-login-view.component';
import { HomePageViewComponent } from './Containers/home-page-view/home-page-view.component';
import { AdminLandingViewComponent } from './Containers/admin-landing-view/admin-landing-view.component';
import { UserLandingViewComponent } from './Containers/user-landing-view/user-landing-view.component';
import { SignupViewComponent } from './Containers/signup-view/signup-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageViewComponent,   
    UserLoginViewComponent,
    AdminLandingViewComponent,
    UserLandingViewComponent,
    SignupViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [UserLoginViewComponent]
})
export class AppModule { }