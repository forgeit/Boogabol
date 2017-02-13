import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { Buffet }			 from '../model/buffet';


@Component({
	selector: 'app-admin',
	templateUrl: './buffet.component.html'
	//styleUrls: ['./app.component.css']
})
export class BuffetComponent implements OnInit {

	list: Buffet[];

	constructor(private helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {
		this.helper.pageTitle = "Buffet";

		this.gs.get('buffet').then(res => {
			this.list = res;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();
		});	
	}		
	
}
