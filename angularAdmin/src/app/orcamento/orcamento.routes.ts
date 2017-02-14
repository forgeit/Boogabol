// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  	from '@angular/core';
import { Routes, RouterModule } 	from '@angular/router';

import { AuthGuard } 				from '../utils/guard';
import { OrcamentoComponent } 		from './orcamento.component';
import { OrcamentoEditComponent }	from './orcamentoEdit.component';

// Route Configuration
export const orcamentoRoutes: Routes = [
	{ path: 'orcamento', 
		children: [
			{path: 'list', component: OrcamentoComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: OrcamentoEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const OrcamentoRouting = [OrcamentoComponent];