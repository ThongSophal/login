import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { OAuthModule } from "angular-oauth2-oidc";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent,SigninOidcComponent]
})




export class AppModule { }
