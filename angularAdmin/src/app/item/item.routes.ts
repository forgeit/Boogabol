// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { ItemComponent } from './item.component';
import { ItemEditComponent } from './itemEdit.component';
import { ItemNewComponent } from './itemNew.component';

// Route Configuration
export const itemRoutes: Routes = [
	{ path: 'item', 
		children: [
			{path: 'list', component: ItemComponent, canActivate: [AuthGuard]},
			{path: 'new', component: ItemNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: ItemEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const ItemRouting = [ItemComponent];