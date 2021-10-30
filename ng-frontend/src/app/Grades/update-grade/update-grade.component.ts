import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Grade} from "../../model/Grade";
import {User} from "../../model/User";
import {Googleuser} from "../../global/googleuser";
import {AppSettings} from "../../app.settings";

@Component({
  selector: 'app-create-grade',
  templateUrl: './update-grade.component.html',
  styleUrls: ['./update-grade.component.css']
})

@Injectable()
export class UpdateGradeComponent implements OnInit {

  form = this.formBuilder.group({
    grade: 0,
    theme: '',
    //user: User,
  });

  newGrade: Grade;
  grades : Grade[] | undefined
  id: number | undefined

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.newGrade = new Grade();
  }



  ngOnInit(): void {
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.get<any>('https://grade-manager.herokuapp.com/grades/getall').subscribe(data => {
      this.grades = data;
      console.log(data);
    })
  }

  async onDropdownChange(event: any) {
    this.id = event.target.value;
    this.newGrade = await this.http.get<Grade>('https://grade-manager.herokuapp.com/grades/' + this.id).toPromise();
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

    this.http.post<Grade>(AppSettings.BASE_URL + 'grades/', {
      grade: this.form.controls.grade.value,
      theme: this.form.controls.theme.value,
      googleUserId: Googleuser.user.id
    }, options).subscribe(data => console.log(data));
  }
}
