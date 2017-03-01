// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { ComplexoComponent } from './complexo.component';
import { ComplexoEditComponent } from './complexoEdit.component';
import { ComplexoNewComponent } from './complexoNew.component';

// Route Configuration
export const complexoRoutes: Routes = [
	{ path: 'complexo', 
		children: [
			{path: 'list', component: ComplexoComponent, canActivate: [AuthGuard]},
			{path: 'new', component: ComplexoNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: ComplexoEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const ComplexoRouting = [ComplexoComponent];