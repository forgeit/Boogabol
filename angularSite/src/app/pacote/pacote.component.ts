import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { Pacote }			 from '../model/pacote';


@Component({
	selector: 'app-admin',
	templateUrl: './pacote.component.html'
	//styleUrls: ['./app.component.css']
})
export class PacoteComponent implements OnInit {

	list: Pacote[];
	hiddenPacote: number = 0;

	constructor(private helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {
		this.helper.pageInfo("Pacotes", null);		

		this.gs.get('pacote').then(res => {
			this.list = res;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();
		});	
	}	

	ofPacote(id: number) {
		if (this.hiddenPacote == id) {
			this.hiddenPacote = 0;
		} else {
			this.hiddenPacote = id;
		}
	}	
	
}
