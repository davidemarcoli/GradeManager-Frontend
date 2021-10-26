import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListGradesComponent} from "./Grades/list-grades/list-grades.component";
import {CreateGradeComponent} from "./Grades/create-grade/create-grade.component";
import { Error404Component } from "./error404/error404.component";
import {ListGradesGridComponent} from "./Grades/list-grades-grid/list-grades-grid.component";

const routes: Routes = [
  { path: '', component: ListGradesComponent },
  //{ path: 'list-grades', component: ListGradesComponent },
  { path: 'list-grades', component: ListGradesGridComponent },
  { path: 'create-grade', component: CreateGradeComponent },

  //Error Page not found
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
