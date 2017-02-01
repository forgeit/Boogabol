// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { DecoracaoComponent } from './decoracao.component';
import { DecoracaoEditComponent } from './decoracaoEdit.component';
import { DecoracaoNewComponent } from './decoracaoNew.component';

// Route Configuration
export const decoracaoRoutes: Routes = [
	{ path: 'decoracao', 
		children: [
			{path: 'list', component: DecoracaoComponent, canActivate: [AuthGuard]},
			{path: 'new', component: DecoracaoNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: DecoracaoEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const DecoracaoRouting = [DecoracaoComponent];