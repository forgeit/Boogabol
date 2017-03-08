import { BrowserModule }                     from '@angular/platform-browser';
import { NgModule }                          from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }                        from '@angular/http';
import { ToastyModule }                      from 'ng2-toasty';
import { LocalStorageModule }                from 'angular-2-local-storage';
import { SlimLoadingBarModule }              from 'ng2-slim-loading-bar';
import { CalendarModule }                    from 'angular-calendar'

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

import { ComplexoService }        from './complexo/complexo.service';
import { ComplexoComponent }      from './complexo/complexo.component';
import { ComplexoEditComponent }  from './complexo/complexoEdit.component';
import { ComplexoNewComponent }   from './complexo/complexoNew.component';

import { EquipeService }        from './equipe/equipe.service';
import { EquipeComponent }      from './equipe/equipe.component';
import { EquipeEditComponent }  from './equipe/equipeEdit.component';
import { EquipeNewComponent }   from './equipe/equipeNew.component';

//import { DecoracaoService }        from './decoracao/decoracao.service';
//import { DecoracaoComponent }      from './decoracao/decoracao.component';
//import { DecoracaoEditComponent }  from './decoracao/decoracaoEdit.component';
//import { DecoracaoNewComponent }   from './decoracao/decoracaoNew.component';

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

import { NewsletterComponent }   from './newsletter/newsletter.component';
import { NewsletterService }   from './newsletter/newsletter.service';

import { PacoteService }        from './pacote/pacote.service';
import { PacoteComponent }      from './pacote/pacote.component';
import { PacoteEditComponent }  from './pacote/pacoteEdit.component';
import { PacoteNewComponent }   from './pacote/pacoteNew.component';

import { SecaoService }        from './secao/secao.service';
import { SecaoComponent }      from './secao/secao.component';
import { SecaoEditComponent }  from './secao/secaoEdit.component';
import { SecaoNewComponent }   from './secao/secaoNew.component';

import { ItemService }        from './item/item.service';
import { ItemComponent }      from './item/item.component';
import { ItemEditComponent }  from './item/itemEdit.component';
import { ItemNewComponent }   from './item/itemNew.component';

import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarioService }   from './calendario/calendario.service';


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

  ComplexoComponent,
  ComplexoEditComponent,
  ComplexoNewComponent,

  EquipeComponent,
  EquipeEditComponent,
  EquipeNewComponent,

  //DecoracaoComponent,
  //DecoracaoEditComponent,
  //DecoracaoNewComponent,

  ParceiroComponent,
  ParceiroEditComponent,
  ParceiroNewComponent,

  ClienteComponent,
  ClienteEditComponent,
  ClienteNewComponent,

  RelatorioComponent,

  OrcamentoComponent,
  OrcamentoEditComponent,

  NewsletterComponent,
  
  PacoteComponent,
  PacoteEditComponent,
  PacoteNewComponent,
  
  SecaoComponent,
  SecaoEditComponent,
  SecaoNewComponent,
  
  ItemComponent,
  ItemEditComponent,
  ItemNewComponent,

  CalendarioComponent

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
  SlimLoadingBarModule.forRoot(),
  CalendarModule.forRoot()
  ],
  providers: [
  Helper, 
  AuthGuard, 
  UploadService, 
  LoginService,
  BuffetService,
  AtracaoService,
  ComplexoService,
  EquipeService,
  //DecoracaoService,
  ParceiroService,
  ClienteService,
  AniversarianteService,
  RelatorioService,
  OrcamentoService,
  NewsletterService,
  PacoteService,
  SecaoService,
  ItemService,
  CalendarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
