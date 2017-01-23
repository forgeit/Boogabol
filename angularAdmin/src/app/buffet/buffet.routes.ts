// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuffetComponent } from './buffet.component';
//import { buffetRoutes }    from './buffet/buffet.routes';

// Route Configuration
export const buffetRoutes: Routes = [
	{ path: 'bc', component: BuffetComponent }	
];

export const BuffetRouting = [BuffetComponent];