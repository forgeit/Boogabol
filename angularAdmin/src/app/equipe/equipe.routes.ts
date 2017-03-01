// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { EquipeComponent } from './equipe.component';
import { EquipeEditComponent } from './equipeEdit.component';
import { EquipeNewComponent } from './equipeNew.component';

// Route Configuration
export const equipeRoutes: Routes = [
	{ path: 'equipe', 
		children: [
			{path: 'list', component: EquipeComponent, canActivate: [AuthGuard]},
			{path: 'new', component: EquipeNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: EquipeEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const EquipeRouting = [EquipeComponent];