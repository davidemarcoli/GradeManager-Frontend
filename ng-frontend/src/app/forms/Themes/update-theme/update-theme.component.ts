import { Component, OnInit } from '@angular/core';
import {Grade} from "../../../model/Grade";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AppSettings} from "../../../app.settings";
import {Googleuser} from "../../../global/googleuser";
import {Goal} from "../../../model/Goal";
import {Theme} from "../../../model/Theme";
import {User} from "../../../model/User";

@Component({
  selector: 'app-update-goal',
  templateUrl: './update-theme.component.html',
  styleUrls: ['./update-theme.component.css', '../../../css/formValidation.css']
})
export class UpdateThemeComponent implements OnInit {

  newTheme: Theme;
  themes : Theme[] | undefined
  id: number | undefined

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.newTheme = new Theme();
  }



  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<any>(AppSettings.BASE_URL + 'themes/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.themes = data;
      console.log(data);
    })
  }

  async onDropdownChange(event: any) {
    this.id = event.target.value;
    this.newTheme = await this.http.get<Theme>(AppSettings.BASE_URL + 'themes/' + this.id).toPromise();
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

    this.http.put<Grade>(AppSettings.BASE_URL + 'themes/', this.newTheme, options).subscribe(data => console.log(data));
  }

}
