import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../model/Grade";
import {User} from "../../model/User";
import {Googleuser} from "../../global/googleuser";
import {AppSettings} from "../../app.settings";

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.css', '../../css/formValidation.css']
})

@Injectable()
export class CreateGradeComponent implements OnInit {

  form = this.formBuilder.group({
      grade: ['', [
        Validators.required,
        Validators.min(1),
        Validators.max(6),
      ]],
      weight: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]],
      theme: ['', [
        Validators.required,
        Validators.maxLength(255),
      ]],
    }
  )
  ;

  constructor(private formBuilder: FormBuilder, private http: HttpClient
  ) {
  }

// elements : Array<User> | undefined

  ngOnInit()
    :
    void {
    // const options = {headers: {'Content-Type': 'application/json'}};
    // this.http.get<any>('https://grade-manager.herokuapp.com/users/getall').subscribe(data => {
    //   this.elements = data;
    //   console.log(data);
    // })
  }

  onSubmit()
    :
    void {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      }
    };

    // this.http.post<Grade>('https://grade-manager.herokuapp.com/grades/', {
    //   grade: this.form.controls.grade.value,
    //   theme: this.form.controls.theme.value,
    //   user: new User(this.form.controls.user.value.id, this.form.controls.theme.value.username, this.form.controls.theme.value.password),
    // }, options).subscribe(data => console.log(data));

    this.http.post<Grade>(AppSettings.BASE_URL + 'grades/', {
      grade: this.form.controls.grade.value,
      weight: this.form.controls.weight.value,
      theme: this.form.controls.theme.value,
      googleUserId: Googleuser.user.id
    }, options).subscribe(data => console.log(data));
  }
}
