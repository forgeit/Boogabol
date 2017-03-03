// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } 			from './utils/guard';

import { LoginComponent } 	  from './login/login.component';
import { LoginEditComponent } from './login/loginEdit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { CalendarioComponent }from './calendario/calendario.component';

import { buffetRoutes } 	from './buffet/buffet.routes';
import { atracaoRoutes } 	from './atracao/atracao.routes';
import { complexoRoutes } 	from './complexo/complexo.routes';
import { equipeRoutes } 	from './equipe/equipe.routes';
import { decoracaoRoutes } 	from './decoracao/decoracao.routes';
import { parceiroRoutes } 	from './parceiro/parceiro.routes';
import { clienteRoutes } 	from './cliente/cliente.routes';
import { orcamentoRoutes } 	from './orcamento/orcamento.routes';
import { newsletterRoutes } from './newsletter/newsletter.routes';
import { pacoteRoutes } 	from './pacote/pacote.routes';
import { secaoRoutes } 		from './secao/secao.routes';
import { itemRoutes } 		from './item/item.routes';


// Route Configuration
export const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
	{path: 'login', component: LoginComponent},
	{path: 'login/out', component: LoginComponent},
	{path: 'login/edit', component: LoginEditComponent, canActivate: [AuthGuard]},
	...buffetRoutes,
	...atracaoRoutes,
	...complexoRoutes,
	...equipeRoutes,
	...decoracaoRoutes,
	...parceiroRoutes,
	...clienteRoutes,
	...orcamentoRoutes,
	...newsletterRoutes,
	...pacoteRoutes,
	...secaoRoutes,
	...itemRoutes,	
	{path: 'relatorio', component: RelatorioComponent, canActivate: [AuthGuard]},
	{path: 'calendario', component: CalendarioComponent, canActivate: [AuthGuard]},
	{path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
