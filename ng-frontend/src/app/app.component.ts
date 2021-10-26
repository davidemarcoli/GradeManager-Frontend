import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {Googleuser} from "./global/googleuser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-frontend';

  loginForm: FormGroup | undefined;
  socialUser: SocialUser | undefined;
  isLoggedin: boolean | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
      Googleuser.user = this.socialUser;
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)/*.then(r => console.log(this.socialUser?.email))*/;

  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
