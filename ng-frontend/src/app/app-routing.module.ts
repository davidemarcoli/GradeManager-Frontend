import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListGradesComponent} from "./Grades/list-grades/list-grades.component";
import {CreateGradeComponent} from "./Grades/create-grade/create-grade.component";

const routes: Routes = [
  { path: '', component: ListGradesComponent },
  { path: 'list-grades', component: ListGradesComponent },
  { path: 'create-grade', component: CreateGradeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
