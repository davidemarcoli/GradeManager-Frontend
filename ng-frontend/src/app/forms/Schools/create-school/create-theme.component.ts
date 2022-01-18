import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../../model/Grade";
import {AppSettings} from "../../../app.settings";
import {Googleuser} from "../../../global/googleuser";
import {Theme} from "../../../model/Theme";
import {User} from "../../../model/User";

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.css', '../../../css/formValidation.css']
})
export class CreateThemeComponent implements OnInit {

  public theme: Theme;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.theme = new Theme();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      }
    };

    this.theme.google_user_id = new User(Googleuser.user.id, Googleuser.user.firstName, Googleuser.user.lastName, Googleuser.user.email);

    this.http.post<Theme>(AppSettings.BASE_URL + 'themes/', this.theme, options).subscribe(data => console.log(data));
  }

}
