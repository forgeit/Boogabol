// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { ParceiroComponent } from './parceiro.component';
import { ParceiroEditComponent } from './parceiroEdit.component';
import { ParceiroNewComponent } from './parceiroNew.component';

// Route Configuration
export const parceiroRoutes: Routes = [
	{ path: 'parceiro', 
		children: [
			{path: 'list', component: ParceiroComponent, canActivate: [AuthGuard]},
			{path: 'new', component: ParceiroNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: ParceiroEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const ParceiroRouting = [ParceiroComponent];