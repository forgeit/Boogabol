import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { TipoFesta }			 from '../model/tipoFesta';


@Component({
	selector: 'app-admin',
	templateUrl: './atracao.component.html'
	//styleUrls: ['./app.component.css']
})
export class TipoFestaComponent implements OnInit {

	list: TipoFesta[];

	constructor(private helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {
		this.gs.get('tipoFesta').then(res => {
			this.list = res;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();
		});	
	}		
	
}
