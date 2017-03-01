// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { SecaoComponent } from './secao.component';
import { SecaoEditComponent } from './secaoEdit.component';
import { SecaoNewComponent } from './secaoNew.component';

// Route Configuration
export const secaoRoutes: Routes = [
	{ path: 'secao', 
		children: [
			{path: 'list', component: SecaoComponent, canActivate: [AuthGuard]},
			{path: 'new', component: SecaoNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: SecaoEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const SecaoRouting = [SecaoComponent];