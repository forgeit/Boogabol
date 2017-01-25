// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/guard';

import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { buffetRoutes } from './buffet/buffet.routes';


// Route Configuration
export const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
	{path: 'login', component: LoginComponent},
	...buffetRoutes,
	{path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
