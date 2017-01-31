// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecoracaoComponent } from './decoracao.component';
import { DecoracaoEditComponent } from './decoracaoEdit.component';
import { DecoracaoNewComponent } from './decoracaoNew.component';

// Route Configuration
export const decoracaoRoutes: Routes = [
	{ path: 'decoracao', 
		children: [
			{path: 'list', component: DecoracaoComponent},
			{path: 'new', component: DecoracaoNewComponent},
			{path: 'edit/:id', component: DecoracaoEditComponent}
		]
	}

];

export const DecoracaoRouting = [DecoracaoComponent];