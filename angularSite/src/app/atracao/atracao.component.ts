import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { Atracao }			 from '../model/atracao';


@Component({
	selector: 'app-admin',
	templateUrl: './atracao.component.html'
	//styleUrls: ['./app.component.css']
})
export class AtracaoComponent implements OnInit {

	list: Atracao[];

	constructor(private helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {
		this.helper.pageTitle = 'Nossas Atrações';

		this.gs.get('atracao').then(res => {
			this.list = res;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();
		});	
	}		
	
}
