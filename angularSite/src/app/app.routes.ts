// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreLoad }				from './utils/preLoad';

import { HomeComponent } 	  	from './home/home.component';
import { AtracaoComponent } 	from './atracao/atracao.component';
import { BuffetComponent }  	from './buffet/buffet.component';
import { ComplexoComponent }  	from './complexo/complexo.component';
import { EquipeComponent }  	from './equipe/equipe.component';
import { OrcamentoComponent }  	from './orcamento/orcamento.component';
import { ContatoComponent }  	from './contato/contato.component';
import { PacoteComponent }  	from './pacote/pacote.component';

// Route Configuration
export const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent, canActivate: [PreLoad]},	
	{path: 'atracao', component: AtracaoComponent, canActivate: [PreLoad]},
	{path: 'ambiente', component: BuffetComponent, canActivate: [PreLoad]},
	{path: 'complexo', component: ComplexoComponent, canActivate: [PreLoad]},
	{path: 'pacote', component: PacoteComponent, canActivate: [PreLoad]},
	{path: 'equipe', component: EquipeComponent, canActivate: [PreLoad]},
	{path: 'orcamento', component: OrcamentoComponent, canActivate: [PreLoad]},
	{path: 'contato', component: ContatoComponent, canActivate: [PreLoad]},
	{path: 'parceiro', component: HomeComponent, canActivate: [PreLoad]},
	{path: '**', redirectTo: '/home', pathMatch: 'full'}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
