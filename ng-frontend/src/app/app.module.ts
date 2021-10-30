import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AgGridModule} from 'ag-grid-angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListGradesComponent} from './Grades/list-grades/list-grades.component';
import {CreateGradeComponent} from './Grades/create-grade/create-grade.component';
import {HttpClientModule} from "@angular/common/http";
import {Error404Component} from './error404/error404.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './navbar/navbar.component';
import {ListGradesGridComponent} from './Grades/list-grades-grid/list-grades-grid.component';

import {SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './diagrams/pie-chart/pie-chart.component';
import {UpdateGradeComponent} from "./Grades/update-grade/update-grade.component";

@NgModule({
  declarations: [
    AppComponent,
    ListGradesComponent,
    CreateGradeComponent,
    Error404Component,
    NavbarComponent,
    ListGradesGridComponent,
    DashboardComponent,
    PieChartComponent,
    UpdateGradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1026375117557-o1flvalcb4gqm3e96n9ceaeoriucus2f.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
