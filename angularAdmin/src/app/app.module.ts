import { BrowserModule }                     from '@angular/platform-browser';
import { NgModule }                          from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }                        from '@angular/http';
import { ToastyModule }                      from 'ng2-toasty';

import { routing }         from './app.routes';
import { AppComponent }    from './app.component';

import { Helper }         from './utils/helper';
import { AuthGuard }      from './utils/guard';
import { UploadService }  from './utils/upload.service';

import { LoginComponent } from './login/login.component';
import { LoginService }   from './login/login.service';

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

@NgModule({
  declarations: [
  AppComponent,

  LoginComponent,

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
  DecoracaoNewComponent

  ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,routing,ToastyModule.forRoot()],
  providers: [
  Helper, 
  AuthGuard, 
  UploadService, 
  LoginService,
  BuffetService,
  AtracaoService,
  CardapioService,
  TipoFestaService,
  DecoracaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
