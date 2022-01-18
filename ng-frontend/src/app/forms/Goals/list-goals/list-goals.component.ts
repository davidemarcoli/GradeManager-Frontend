import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../../model/Grade";
import {AppSettings} from "../../../app.settings";
import {Googleuser} from "../../../global/googleuser";
import {ThemeAverage} from "../../../model/ThemeAverage";
import {Goal} from "../../../model/Goal"

@Component({
  selector: 'app-list-goals',
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.css']
})
export class ListGoalsComponent implements OnInit {

  // @ts-ignore
  goals : Array<Goal>
  // @ts-ignore
  averages: Array<ThemeAverage>;

  constructor(private http : HttpClient) {
  }

  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<Goal[]>(AppSettings.BASE_URL + 'goals/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.goals = data;
      console.log(this.goals);
    })
    this.http.get<ThemeAverage[]>(AppSettings.BASE_URL + 'grades/getThemeAverage/' + Googleuser.user.id).subscribe(data => {
      this.averages = data;
      console.log(this.averages);
    })
  }

  getAverage(theme: string | undefined) {
    for (let i = 0; i < this.averages.length; i++) {
      if (this.averages[i].name == theme) {
        return this.averages[i];
      }
    }
    return new ThemeAverage()
  }

  isGoalReached(goal: Goal) : boolean {
    // @ts-ignore
    return this.getAverage(goal.theme).value >= goal.gradeGoal;

  }

}
