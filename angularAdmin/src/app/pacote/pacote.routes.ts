// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { PacoteComponent } from './pacote.component';
import { PacoteEditComponent } from './pacoteEdit.component';
import { PacoteNewComponent } from './pacoteNew.component';

// Route Configuration
export const pacoteRoutes: Routes = [
	{ path: 'pacote', 
		children: [
			{path: 'list', component: PacoteComponent, canActivate: [AuthGuard]},
			{path: 'new', component: PacoteNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: PacoteEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const PacoteRouting = [PacoteComponent];