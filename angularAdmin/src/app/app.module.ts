import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';

import { Helper } from './utils/helper';
import { AuthGuard } from './utils/guard';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import { DashboardComponent } from './dashboard/dashboard.component';

import { BuffetService } from './buffet/buffet.service';
import { BuffetComponent } from './buffet/buffet.component';
import { BuffetEditComponent } from './buffet/buffetEdit.component';

@NgModule({
  declarations: [
  AppComponent,

  LoginComponent,

  DashboardComponent,

  BuffetComponent,
  BuffetEditComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  routing
  ],
  providers: [Helper, AuthGuard, BuffetService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
