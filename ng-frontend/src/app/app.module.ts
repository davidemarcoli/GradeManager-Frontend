import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGradesComponent } from './Grades/list-grades/list-grades.component';
import { CreateGradeComponent } from './Grades/create-grade/create-grade.component';
import { HttpClientModule } from "@angular/common/http";
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGradesComponent,
    CreateGradeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
