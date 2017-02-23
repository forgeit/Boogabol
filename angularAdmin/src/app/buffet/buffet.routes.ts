// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { BuffetComponent } from './buffet.component';
import { BuffetEditComponent } from './buffetEdit.component';
import { BuffetNewComponent } from './buffetNew.component';

// Route Configuration
export const buffetRoutes: Routes = [
	{ path: 'ambiente', 
		children: [
			{path: 'list', component: BuffetComponent, canActivate: [AuthGuard]},
			{path: 'new', component: BuffetNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: BuffetEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const BuffetRouting = [BuffetComponent];