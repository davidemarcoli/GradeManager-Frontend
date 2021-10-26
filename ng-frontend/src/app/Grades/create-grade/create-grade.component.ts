import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../model/Grade";
import {User} from "../../model/User";
import {Googleuser} from "../../global/googleuser";

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.css']
})

@Injectable()
export class CreateGradeComponent implements OnInit {

  form = this.formBuilder.group({
    grade: '',
    theme: '',
    user: User,
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }

  // elements : Array<User> | undefined

  ngOnInit(): void {
    // const options = {headers: {'Content-Type': 'application/json'}};
    // this.http.get<any>('https://grade-manager.herokuapp.com/users/getall').subscribe(data => {
    //   this.elements = data;
    //   console.log(data);
    // })
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

    // this.http.post<Grade>('https://grade-manager.herokuapp.com/grades/', {
    //   grade: this.form.controls.grade.value,
    //   theme: this.form.controls.theme.value,
    //   user: new User(this.form.controls.user.value.id, this.form.controls.theme.value.username, this.form.controls.theme.value.password),
    // }, options).subscribe(data => console.log(data));

    this.http.post<Grade>('https://grade-manager.herokuapp.com/grades/', {
      grade: this.form.controls.grade.value,
      theme: this.form.controls.theme.value,
      googleUserId: Googleuser.user.id
    }, options).subscribe(data => console.log(data));
  }
}
