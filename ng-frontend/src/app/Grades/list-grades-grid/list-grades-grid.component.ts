import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../model/Grade";
import {ColDef} from "ag-grid-community";
import {Googleuser} from "../../global/googleuser";

@Component({
  selector: 'app-list-grades-grid',
  templateUrl: './list-grades-grid.component.html',
  styleUrls: ['./list-grades-grid.component.css']
})
export class ListGradesGridComponent implements OnInit {

  constructor(private http : HttpClient) { }

  columnDefs: ColDef[] = [
    { field: 'grade', sortable: true, filter: "agNumberColumnFilter" },
    { field: 'theme', sortable: true, filter: "agMultiColumnFilter" }
  ];

  sideBar = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        minWidth: 225,
        maxWidth: 225,
        width: 225
      },
    ],
    defaultToolPanel: 'columns',
  };

  // @ts-ignore
  elements : Array<Grade>

  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    /*this.http.get<Grade[]>('https://grade-manager.herokuapp.com/grades/getall').subscribe(data => {
      this.elements = data;
      console.log(this.elements);
    })*/

    this.http.get<Grade[]>('https://grade-manager.herokuapp.com/grades/getbyuser/' + Googleuser.user.id).subscribe(data => {
      this.elements = data;
      console.log(this.elements);
    })
  }

  onGridReady() {

  }

}