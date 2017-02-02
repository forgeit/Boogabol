// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { ClienteComponent } from './cliente.component';
import { ClienteEditComponent } from './clienteEdit.component';
import { ClienteNewComponent } from './clienteNew.component';

// Route Configuration
export const clienteRoutes: Routes = [
	{ path: 'cliente', 
		children: [
			{path: 'list', component: ClienteComponent, canActivate: [AuthGuard]},
			{path: 'new', component: ClienteNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: ClienteEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const ClienteRouting = [ClienteComponent];