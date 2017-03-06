import { Component, OnInit } 	from '@angular/core';
import { Router } 		from '@angular/router';

import { GenericService }	from '../utils/generic.service';
import { Helper }			from '../utils/helper';

import { Complexo } 	from '../model/complexo';
import { Buffet } 		from '../model/buffet';
import { Equipe } 	from '../model/equipe';
import { Atracao } 		from '../model/atracao';
import { Parceiro } 	from '../model/parceiro';


@Component({
	selector: 'app-admin',
	templateUrl: './home.component.html'
	//styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
	
	complexo: Complexo;
	buffet: Buffet;
	equipe: Equipe;
	atracao: Atracao;
	parceiroList: Parceiro[];	

	constructor(private helper: Helper, private gs: GenericService, private router: Router) {
		//helper.setPageInfo('Dashboard');

		this.complexo = new Complexo(null,'','',null);
		this.buffet = new Buffet(null,'','',null);
		this.equipe = new Equipe(null,'','',null);
		this.atracao = new Atracao(null,'','',null);
	}

	ngOnInit(): void {
		this.helper.pageInfo(null, null);		
		
		this.gs.get('home').then(res => {
			if (res.complexo != null) {
				this.complexo = res['complexo'];
			} 
			if (res.buffet != null) {
				this.buffet = res['buffet'];
			}
			if (res.equipe != null) {
				this.equipe = res['equipe'];
			}
			if (res.atracao != null) {
				this.atracao = res['atracao'];
			}
			if (res.parceiroList != null) {
				this.parceiroList = res.parceiroList;
			}

			this.helper.loadJS();	

			if (this.helper.getCurrentUrl() == '/parceiro') {
				this.helper.scrollTo();
			}
		});
	}

}
