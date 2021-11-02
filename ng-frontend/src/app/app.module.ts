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
import { ThemeAverageChartComponent } from './diagrams/theme-average-chart/theme-average-chart.component';
import {UpdateGradeComponent} from "./Grades/update-grade/update-grade.component";

import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoolSocialLoginButtonsModule } from "@angular-cool/social-login-buttons";
import { CreateGoalComponent } from './Goals/create-goal/create-goal.component';
import { ListGoalsComponent } from './Goals/list-goals/list-goals.component';
import { ListGoalsAdvancedComponent } from "./Goals/list-goals-advanced/list-goals-advanced.component";
import { UpdateGoalComponent } from './Goals/update-goal/update-goal.component';
import { DeleteGradeComponent } from './Grades/delete-grade/delete-grade.component';
import { DeleteGoalComponent } from './Goals/delete-goal/delete-goal.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListGradesComponent,
    CreateGradeComponent,
    Error404Component,
    NavbarComponent,
    ListGradesGridComponent,
    DashboardComponent,
    ThemeAverageChartComponent,
    UpdateGradeComponent,
    CreateGoalComponent,
    ListGoalsComponent,
    ListGoalsAdvancedComponent,
    UpdateGoalComponent,
    DeleteGradeComponent,
    DeleteGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    SocialLoginModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    CoolSocialLoginButtonsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    NgbModule
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
