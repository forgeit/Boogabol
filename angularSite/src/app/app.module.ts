import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Helper }         from './utils/helper';

import { AppComponent }   from './app.component';
import { routing }        from './app.routes';

import { PreLoad }        from './utils/preLoad';

import { HomeComponent }    from './home/home.component';
import { AtracaoComponent } from './atracao/atracao.component';
import { BuffetComponent }  from './buffet/buffet.component';
import { ComplexoComponent }  from './complexo/complexo.component';
import { EquipeComponent }  from './equipe/equipe.component';
import { OrcamentoComponent }  from './orcamento/orcamento.component';
import { ContatoComponent }  from './contato/contato.component';

import { GenericService } from './utils/generic.service';



@NgModule({
  declarations: [
  AppComponent,

  HomeComponent,
  AtracaoComponent,
  BuffetComponent,
  ComplexoComponent,
  EquipeComponent,
  OrcamentoComponent,
  ContatoComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  routing
  ],
  providers: [
  Helper,
  GenericService,
  PreLoad
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
