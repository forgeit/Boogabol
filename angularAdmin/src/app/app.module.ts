import { BrowserModule }                     from '@angular/platform-browser';
import { NgModule }                          from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }                        from '@angular/http';
import { ToastyModule }                      from 'ng2-toasty';
import { LocalStorageModule }                from 'angular-2-local-storage';
import {SlimLoadingBarModule}                from 'ng2-slim-loading-bar';

import { routing }         from './app.routes';
import { AppComponent }    from './app.component';

import { Helper }         from './utils/helper';
import { AuthGuard }      from './utils/guard';
import { UploadService }  from './utils/upload.service';

import { LoginComponent }     from './login/login.component';
import { LoginService }       from './login/login.service';
import { LoginEditComponent } from './login/loginEdit.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { BuffetService }        from './buffet/buffet.service';
import { BuffetComponent }      from './buffet/buffet.component';
import { BuffetEditComponent }  from './buffet/buffetEdit.component';
import { BuffetNewComponent }   from './buffet/buffetNew.component';

import { AtracaoService }        from './atracao/atracao.service';
import { AtracaoComponent }      from './atracao/atracao.component';
import { AtracaoEditComponent }  from './atracao/atracaoEdit.component';
import { AtracaoNewComponent }   from './atracao/atracaoNew.component';

import { CardapioService }        from './cardapio/cardapio.service';
import { CardapioComponent }      from './cardapio/cardapio.component';
import { CardapioEditComponent }  from './cardapio/cardapioEdit.component';
import { CardapioNewComponent }   from './cardapio/cardapioNew.component';

import { TipoFestaService }        from './tipoFesta/tipoFesta.service';
import { TipoFestaComponent }      from './tipoFesta/tipoFesta.component';
import { TipoFestaEditComponent }  from './tipoFesta/tipoFestaEdit.component';
import { TipoFestaNewComponent }   from './tipoFesta/tipoFestaNew.component';

import { DecoracaoService }        from './decoracao/decoracao.service';
import { DecoracaoComponent }      from './decoracao/decoracao.component';
import { DecoracaoEditComponent }  from './decoracao/decoracaoEdit.component';
import { DecoracaoNewComponent }   from './decoracao/decoracaoNew.component';

import { ParceiroService }        from './parceiro/parceiro.service';
import { ParceiroComponent }      from './parceiro/parceiro.component';
import { ParceiroEditComponent }  from './parceiro/parceiroEdit.component';
import { ParceiroNewComponent }   from './parceiro/parceiroNew.component';

import { ClienteService }        from './cliente/cliente.service';
import { ClienteComponent }      from './cliente/cliente.component';
import { ClienteEditComponent }  from './cliente/clienteEdit.component';
import { ClienteNewComponent }   from './cliente/clienteNew.component';

import { AniversarianteService } from './cliente/aniversariante.service';

import { RelatorioService }      from './relatorio/relatorio.service';
import { RelatorioComponent }    from './relatorio/relatorio.component';

import { OrcamentoService }      from './orcamento/orcamento.service';
import { OrcamentoComponent }    from './orcamento/orcamento.component';
import { OrcamentoEditComponent }from './orcamento/orcamentoEdit.component';

@NgModule({
  declarations: [
  AppComponent,

  LoginComponent,
  LoginEditComponent,

  DashboardComponent,

  BuffetComponent,
  BuffetEditComponent,
  BuffetNewComponent,

  AtracaoComponent,
  AtracaoEditComponent,
  AtracaoNewComponent,

  CardapioComponent,
  CardapioEditComponent,
  CardapioNewComponent,

  TipoFestaComponent,
  TipoFestaEditComponent,
  TipoFestaNewComponent,

  DecoracaoComponent,
  DecoracaoEditComponent,
  DecoracaoNewComponent,

  ParceiroComponent,
  ParceiroEditComponent,
  ParceiroNewComponent,

  ClienteComponent,
  ClienteEditComponent,
  ClienteNewComponent,

  RelatorioComponent,

  OrcamentoComponent,
  OrcamentoEditComponent

  ],
  imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  routing,
  ToastyModule.forRoot(),
  LocalStorageModule.withConfig({
    prefix: 'boog-app',
    storageType: 'localStorage'    
  }),
  SlimLoadingBarModule.forRoot()
  ],
  providers: [
  Helper, 
  AuthGuard, 
  UploadService, 
  LoginService,
  BuffetService,
  AtracaoService,
  CardapioService,
  TipoFestaService,
  DecoracaoService,
  ParceiroService,
  ClienteService,
  AniversarianteService,
  RelatorioService,
  OrcamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
