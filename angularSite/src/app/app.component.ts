import { Component, OnInit } from '@angular/core';
import { Helper }    		 from './utils/helper';

import { GenericService }	 from './utils/generic.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	messageSuccess: string = "";
	messageError: string = "";
	emailNews: string = "";

	constructor(public helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {		
	}

	newsSubmit(): void {
		this.messageError = '';
		this.messageSuccess = '';
		
		if (this.emailNews == '') {
			this.messageSuccess = "Preencha o email";
		} else {
			this.gs.post(this.emailNews, 'newsletter').then(res => {
				if (this.helper.environment.RET_OK == res.res) {
					this.emailNews = '';				
					this.messageSuccess = res.message;
				} else {
					this.messageError = res.message;					
				}
			});
		}
	}
}
