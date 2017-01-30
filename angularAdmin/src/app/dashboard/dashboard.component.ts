import { Component } 	from '@angular/core';
import { Router } 		from '@angular/router';

import { Helper }		from '../utils/helper';
import { GenericComponent }		from '../utils/generic.component';

@Component({
	selector: 'app-admin',
	templateUrl: './dashboard.component.html'
	//styleUrls: ['./app.component.css']
})
export class DashboardComponent extends GenericComponent {
	constructor(private helper: Helper) {
		super(null);
		helper.setPageInfo('Dashboard', this.environment.module_dashboard);
	}
	title = 'app works!';
}
