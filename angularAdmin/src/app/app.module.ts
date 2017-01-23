import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BuffetComponent } from './buffet/buffet.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BuffetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
