import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { TipoFesta }			 from '../model/tipoFesta';
import { Decoracao }			 from '../model/decoracao';


@Component({
	selector: 'app-admin',
	templateUrl: './orcamento.component.html'
	//styleUrls: ['./app.component.css']
})
export class OrcamentoComponent implements OnInit {

	tipoFestaList: TipoFesta[];
	decoracaoList: Decoracao[];

	constructor(private helper: Helper, private gs: GenericService) {		
	}

	ngOnInit(): void {
		this.gs.get('orcamento').then(res => {
			this.tipoFestaList = res.tipoFestaList;
			this.decoracaoList = res.decoracaoList;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();
		});	
	}		
	
}
