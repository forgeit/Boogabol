// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { TipoFestaComponent } from './tipoFesta.component';
import { TipoFestaEditComponent } from './tipoFestaEdit.component';
import { TipoFestaNewComponent } from './tipoFestaNew.component';

// Route Configuration
export const tipoFestaRoutes: Routes = [
	{ path: 'tipoFesta', 
		children: [
			{path: 'list', component: TipoFestaComponent, canActivate: [AuthGuard]},
			{path: 'new', component: TipoFestaNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: TipoFestaEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const TipoFestaRouting = [TipoFestaComponent];