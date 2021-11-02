import {Component, Injectable, OnInit} from '@angular/core';
import {Grade} from "../../model/Grade";
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AppSettings} from "../../app.settings";
import {Googleuser} from "../../global/googleuser";
import {Goal} from "../../model/Goal";

@Component({
  selector: 'app-delete-goal',
  templateUrl: './delete-goal.component.html',
  styleUrls: ['./delete-goal.component.css']
})

@Injectable()
export class DeleteGoalComponent implements OnInit {

  goals: Goal[] | undefined
  id: number | undefined

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<Goal[]>(AppSettings.BASE_URL + 'goals/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.goals = data;
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

    this.http.delete<any>(AppSettings.BASE_URL + 'goals/' + this.id, options).subscribe(data => console.log(data));
  }

}
