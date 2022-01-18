import { Component, OnInit } from '@angular/core';
import {Grade} from "../../../model/Grade";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AppSettings} from "../../../app.settings";
import {Googleuser} from "../../../global/googleuser";
import {Goal} from "../../../model/Goal";

@Component({
  selector: 'app-update-goal',
  templateUrl: './update-goal.component.html',
  styleUrls: ['./update-goal.component.css', '../../../css/formValidation.css']
})
export class UpdateGoalComponent implements OnInit {

  form = this.formBuilder.group({
    gradeGoal: ['', [
      Validators.required,
      Validators.min(1),
      Validators.max(6),
    ]],
    theme: ['', [
      Validators.required,
    ]],
  });

  newGoal: Goal;
  goals : Goal[] | undefined
  id: number | undefined

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.newGoal = new Goal();
  }



  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<any>(AppSettings.BASE_URL + 'goals/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.goals = data;
      console.log(data);
    })
  }

  async onDropdownChange(event: any) {
    this.id = event.target.value;
    this.newGoal = await this.http.get<Goal>(AppSettings.BASE_URL + 'goals/' + this.id).toPromise();
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

    this.http.put<Goal>(AppSettings.BASE_URL + 'goals/', {
      id: this.newGoal.id,
      gradeGoal: this.form.controls.gradeGoal.value,
      theme: this.form.controls.theme.value,
      googleUserId: Googleuser.user.id
    }, options).subscribe(data => console.log(data));
  }

}
