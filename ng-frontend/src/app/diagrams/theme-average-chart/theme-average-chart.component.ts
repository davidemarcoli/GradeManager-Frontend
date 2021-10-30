import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Googleuser} from "../../global/googleuser";
import {AppSettings} from "../../app.settings";

@Component({
  selector: "app-theme-average-chart",
  styleUrls: ["./theme-average-chart.component.css"],
  templateUrl: "./theme-average-chart.component.html"
})
export class ThemeAverageChartComponent implements OnInit {

  public data: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<any>(AppSettings.BASE_URL + 'grades/getThemeAverage/' + Googleuser.user.id).subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

}
