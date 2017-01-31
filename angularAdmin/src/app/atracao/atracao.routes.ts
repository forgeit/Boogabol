// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtracaoComponent } from './atracao.component';
import { AtracaoEditComponent } from './atracaoEdit.component';
import { AtracaoNewComponent } from './atracaoNew.component';

// Route Configuration
export const atracaoRoutes: Routes = [
	{ path: 'atracao', 
		children: [
			{path: 'list', component: AtracaoComponent},
			{path: 'new', component: AtracaoNewComponent},
			{path: 'edit/:id', component: AtracaoEditComponent}
		]
	}

];

export const AtracaoRouting = [AtracaoComponent];