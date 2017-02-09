import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {SlimLoadingBarModule}  from 'ng2-slim-loading-bar';

import { Helper }         from './utils/helper';

import { AppComponent }   from './app.component';
import { routing }        from './app.routes';

import { HomeComponent }    from './home/home.component';
import { AtracaoComponent } from './atracao/atracao.component';

import { GenericService } from './utils/generic.service';



@NgModule({
  declarations: [
  AppComponent,

  HomeComponent,
  AtracaoComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  routing,
  SlimLoadingBarModule.forRoot()
  ],
  providers: [
  Helper,
  GenericService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
