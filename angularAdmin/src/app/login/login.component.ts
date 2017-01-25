import { Component, OnInit } from '@angular/core';
import { Helper } from '../utils/helper';

@Component({
	selector: 'app-admin',
	templateUrl: './login.component.html'
	//styleUrls: ['./app.component.css']
})

export class LoginComponent implements OnInit {
	constructor(private helper: Helper) {}

	ngOnInit(): void {
		
	}
	
}



