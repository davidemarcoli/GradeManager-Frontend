import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Googleuser} from "../../global/googleuser";
import {AppSettings} from "../../app.settings";
import {Grade} from "../../model/Grade";

@Component({
  selector: "app-theme-average-chart",
  styleUrls: ["./theme-average-chart.component.css"],
  templateUrl: "./theme-average-chart.component.html"
})
export class ThemeAverageChartComponent implements OnInit {

  public data: any;

  public grades: Grade[] | undefined;

  public theme: string | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<any>(AppSettings.BASE_URL + 'grades/getThemeAverage/' + Googleuser.user.id).subscribe(data => {
      this.data = data;
      console.log(data);
    })
    this.http.get<Grade[]>(AppSettings.BASE_URL + 'grades/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.grades = data;
      console.log(data);
    })
  }

  onChartClick(event: any) {
    //console.log(event);
    this.theme = event.name;

    // @ts-ignore
    /*for (let i = 0; i < this.grades.length; i++) {
      if ()
    }*/
  }

}
