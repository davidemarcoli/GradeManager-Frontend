import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../../model/Grade";
import {AppSettings} from "../../../app.settings";
import {Googleuser} from "../../../global/googleuser";

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css', '../../../css/formValidation.css']
})
export class CreateGoalComponent implements OnInit {

  form = this.formBuilder.group({
    gradeGoal: ['', [
      Validators.min(1),
      Validators.max(6),
      Validators.required,
    ]],
    theme: ['', [
      Validators.required,
      Validators.maxLength(255),
    ]],
    //user: User,
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
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


    this.http.post<Grade>(AppSettings.BASE_URL + 'goals/', {
      gradeGoal: this.form.controls.gradeGoal.value,
      theme: this.form.controls.theme.value,
      googleUserId: Googleuser.user.id
    }, options).subscribe(data => console.log(data));
  }

}
