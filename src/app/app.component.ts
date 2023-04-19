import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login using oauth2-oidc';


  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }


  handleRefreshTokenClick = () => this.oauthService.refreshToken(); 

  get isLoggedIn() {
   return !!this.oauthService.getIdToken();
   
  }
  
  handleLoginClick = () => this.isLoggedIn 
    ? this.oauthService.logOut()
    : this.oauthService.initCodeFlow();
   // : this.oauthService.initLoginFlow();

}


