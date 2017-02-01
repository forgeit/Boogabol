import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper } 	 from '../utils/helper';
import { AuthGuard } from '../utils/guard';
import { LoginService } from './login.service';

@Component({
	selector: 'app-admin',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
	constructor(private helper: Helper, private router: Router, private ls: LoginService) {}

	ngOnInit(): void {
		if (this.router.url == 'login/out') {
			this.ls.logout();
		}
	}
	
}



