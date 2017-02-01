// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../utils/guard';
import { CardapioComponent } from './cardapio.component';
import { CardapioEditComponent } from './cardapioEdit.component';
import { CardapioNewComponent } from './cardapioNew.component';

// Route Configuration
export const cardapioRoutes: Routes = [
	{ path: 'cardapio', 
		children: [
			{path: 'list', component: CardapioComponent, canActivate: [AuthGuard]},
			{path: 'new', component: CardapioNewComponent, canActivate: [AuthGuard]},
			{path: 'edit/:id', component: CardapioEditComponent, canActivate: [AuthGuard]}
		]
	}

];

export const CardapioRouting = [CardapioComponent];