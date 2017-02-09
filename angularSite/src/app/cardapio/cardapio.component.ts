import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { Cardapio }			 from '../model/cardapio';


@Component({
	selector: 'app-admin',
	templateUrl: './cardapio.component.html'
	//styleUrls: ['./app.component.css']
})
export class CardapioComponent implements OnInit {

	list: Cardapio[];

	constructor(private helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {
		this.gs.get('cardapio').then(res => {
			this.list = res;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();
		});	
	}		
	
}
