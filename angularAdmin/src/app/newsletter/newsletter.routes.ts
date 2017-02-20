// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  	from '@angular/core';
import { Routes, RouterModule } 	from '@angular/router';

import { AuthGuard } 				from '../utils/guard';
import { NewsletterComponent } 		from './newsletter.component';

// Route Configuration
export const newsletterRoutes: Routes = [
	{ path: 'newsletter', 
		children: [
			{path: 'list', component: NewsletterComponent, canActivate: [AuthGuard]},
		]
	}

];

export const NewsletterRouting = [NewsletterComponent];