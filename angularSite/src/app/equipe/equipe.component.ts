import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { Equipe }			 from '../model/equipe';


@Component({
	selector: 'app-admin',
	templateUrl: './equipe.component.html'
	//styleUrls: ['./app.component.css']
})
export class EquipeComponent implements OnInit {

	list: Equipe[];

	constructor(private helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {
		this.helper.pageInfo("Equipe", 'menu1');		

		this.gs.get('equipe').then(res => {
			this.list = res;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();
		});	
	}		
	
}
