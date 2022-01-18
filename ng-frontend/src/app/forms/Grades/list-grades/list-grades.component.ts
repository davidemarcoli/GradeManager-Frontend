import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../../model/Grade";
import {Googleuser} from "../../../global/googleuser";
import {AppSettings} from "../../../app.settings";

@Component({
  selector: 'app-list-grades',
  templateUrl: './list-grades.component.html',
  styleUrls: ['./list-grades.component.css']
})

@Injectable()
export class ListGradesComponent implements OnInit {

  constructor(private http : HttpClient) { }

  // @ts-ignore
  elements : Array<Grade>

  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<Grade[]>(AppSettings.BASE_URL + 'grades/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.elements = data;
      console.log(this.elements);
    })
  }

}
