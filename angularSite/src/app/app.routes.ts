// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreLoad }				from './utils/preLoad';

import { HomeComponent } 	  	from './home/home.component';
import { AtracaoComponent } 	from './atracao/atracao.component';
import { BuffetComponent }  	from './buffet/buffet.component';
import { CardapioComponent }  	from './cardapio/cardapio.component';
import { TipoFestaComponent }  	from './tipoFesta/tipoFesta.component';
import { OrcamentoComponent }  	from './orcamento/orcamento.component';
import { ContatoComponent }  	from './contato/contato.component';

// Route Configuration
export const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent, canActivate: [PreLoad]},	
	{path: 'atracao', component: AtracaoComponent, canActivate: [PreLoad]},
	{path: 'buffet', component: BuffetComponent, canActivate: [PreLoad]},
	{path: 'cardapio', component: CardapioComponent, canActivate: [PreLoad]},
	{path: 'tipoFesta', component: TipoFestaComponent, canActivate: [PreLoad]},
	{path: 'orcamento', component: OrcamentoComponent, canActivate: [PreLoad]},
	{path: 'contato', component: ContatoComponent, canActivate: [PreLoad]},
	{path: '**', redirectTo: '/home', pathMatch: 'full'}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
