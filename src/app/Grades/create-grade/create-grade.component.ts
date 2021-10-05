import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../model/Grade";

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.css']
})

@Injectable()
export class CreateGradeComponent implements OnInit {

  form = this.formBuilder.group({
    grade: '',
    theme: ''
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

    this.http.post<Grade>('https://grade-manager.herokuapp.com/grades/', {
      grade: this.form.controls.grade.value,
      theme: this.form.controls.theme.value,
    }, options)
  }
}
