import {Component, Injectable, OnInit} from '@angular/core';
import {Grade} from "../../../model/Grade";
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AppSettings} from "../../../app.settings";
import {Googleuser} from "../../../global/googleuser";
import {Goal} from "../../../model/Goal";
import {Theme} from "../../../model/Theme";

@Component({
  selector: 'app-delete-goal',
  templateUrl: './delete-theme.component.html',
  styleUrls: ['./delete-theme.component.css']
})

@Injectable()
export class DeleteThemeComponent implements OnInit {

  themes: Theme[] = [];
  id: number | undefined

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<Theme[]>(AppSettings.BASE_URL + 'themes/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.themes = data;
      console.log(data);
    })
  }

  async onDropdownChange(event: any) {
    this.id = event.target.value;
    console.log("ID: " + this.id);
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

    this.http.delete<any>(AppSettings.BASE_URL + 'themes/' + this.id, options).subscribe(data => console.log(data));
  }

}
