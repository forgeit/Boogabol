import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { Complexo }			 from '../model/complexo';


@Component({
	selector: 'app-admin',
	templateUrl: './complexo.component.html'
	//styleUrls: ['./app.component.css']
})
export class ComplexoComponent implements OnInit {

	list: Complexo[];

	constructor(private helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {
		this.helper.pageInfo("Complexo Esportivo", null);

		this.gs.get('complexo').then(res => {
			this.list = res;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();
		});	
	}		
	
}
