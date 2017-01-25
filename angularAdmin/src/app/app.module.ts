import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';

import { Helper } from './helper';

import { DashboardComponent } from './dashboard/dashboard.component';

import { BuffetService } from './buffet/buffet.service';
import { BuffetComponent } from './buffet/buffet.component';
import { BuffetEditComponent } from './buffet/buffetEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
    BuffetComponent,
    BuffetEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Helper, BuffetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
