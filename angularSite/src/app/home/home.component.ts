import { Component } 	from '@angular/core';
import { Router } 		from '@angular/router';

import { environment } 	from '../../environments/environment';
import { Helper }		from '../utils/helper';


@Component({
	selector: 'app-admin',
	templateUrl: './home.component.html'
	//styleUrls: ['./app.component.css']
})
export class HomeComponent{
	environment:any = environment;

	constructor(private helper: Helper) {
		//helper.setPageInfo('Dashboard');
	}
	title = 'app works!';
}
