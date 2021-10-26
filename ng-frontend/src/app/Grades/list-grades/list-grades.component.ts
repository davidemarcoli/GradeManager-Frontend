import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../model/Grade";
import {Googleuser} from "../../global/googleuser";

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
    // this.http.get<any>('https://grade-manager.herokuapp.com/grades/getall').subscribe(data => {
    //   this.elements = data;
    //   console.log(data);
    // })

    this.http.get<Grade[]>('https://grade-manager.herokuapp.com/grades/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.elements = data;
      console.log(this.elements);
    })
  }

}
