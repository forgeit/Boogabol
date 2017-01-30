// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuffetComponent } from './buffet.component';
import { BuffetEditComponent } from './buffetEdit.component';
import { BuffetNewComponent } from './buffetNew.component';

// Route Configuration
export const buffetRoutes: Routes = [
	{ path: 'buffet', 
		children: [
			{path: 'list', component: BuffetComponent},
			{path: 'new', component: BuffetNewComponent},
			{path: 'edit/:id', component: BuffetEditComponent}
		]
	}

];

export const BuffetRouting = [BuffetComponent];