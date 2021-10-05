import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-grades',
  templateUrl: './list-grades.component.html',
  styleUrls: ['./list-grades.component.css']
})

@Injectable()
export class ListGradesComponent implements OnInit {

  constructor(private http : HttpClient) { }

  elements : Array<any> | undefined

  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<any>('https://grade-manager.herokuapp.com/grades/getall').subscribe(data => {
      this.elements = data;
      console.log(data);
    })
  }

}
