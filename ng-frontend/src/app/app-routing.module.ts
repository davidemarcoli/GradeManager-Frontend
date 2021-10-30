import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListGradesComponent} from "./Grades/list-grades/list-grades.component";
import {CreateGradeComponent} from "./Grades/create-grade/create-grade.component";
import { Error404Component } from "./error404/error404.component";
import {ListGradesGridComponent} from "./Grades/list-grades-grid/list-grades-grid.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {UpdateGradeComponent} from "./Grades/update-grade/update-grade.component";

const routes: Routes = [
  { path: '', redirectTo: "dashboard", pathMatch: "full"},
  //{ path: 'list-grades', component: ListGradesComponent },
  { path: 'list-grades', component: ListGradesGridComponent },
  { path: 'create-grade', component: CreateGradeComponent },
  { path: 'update-grade', component: UpdateGradeComponent },
  { path: 'dashboard', component: DashboardComponent },

  //Error Page not found
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
