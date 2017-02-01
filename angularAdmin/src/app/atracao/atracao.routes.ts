// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { AtracaoComponent } from './atracao.component';
import { AtracaoEditComponent } from './atracaoEdit.component';
import { AtracaoNewComponent } from './atracaoNew.component';

// Route Configuration
export const atracaoRoutes: Routes = [
	{ path: 'atracao', 
		children: [
			{path: 'list', component: AtracaoComponent, canActivate: [AuthGuard]},
			{path: 'new', component: AtracaoNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: AtracaoEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const AtracaoRouting = [AtracaoComponent];