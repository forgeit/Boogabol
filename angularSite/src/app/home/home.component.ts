import { Component, OnInit } 	from '@angular/core';
import { Router } 		from '@angular/router';

import { GenericService }	from '../utils/generic.service';
import { Helper }			from '../utils/helper';

import { Cardapio } 	from '../model/cardapio';
import { Buffet } 		from '../model/buffet';
import { TipoFesta } 	from '../model/tipoFesta';
import { Atracao } 		from '../model/atracao';
import { Parceiro } from '../model/parceiro';


@Component({
	selector: 'app-admin',
	templateUrl: './home.component.html'
	//styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
	
	cardapio: Cardapio;
	buffet: Buffet;
	tipoFesta: TipoFesta;
	atracao: Atracao;
	parceiroList: Parceiro[];

	constructor(private helper: Helper, private gs: GenericService, private router: Router) {
		//helper.setPageInfo('Dashboard');

		this.cardapio = new Cardapio(null,'','',null);
		this.buffet = new Buffet(null,'','',null);
		this.tipoFesta = new TipoFesta(null,'','',null);
		this.atracao = new Atracao(null,'','',null);
	}

	ngOnInit(): void {
		this.helper.pageTitle = null;
		
		this.gs.get('home').then(res => {
			if (res.cardapio != null) {
				this.cardapio = res['cardapio'];
			} 
			if (res.buffet != null) {
				this.buffet = res['buffet'];
			}
			if (res.tipoFesta != null) {
				this.tipoFesta = res['tipoFesta'];
			}
			if (res.atracao != null) {
				this.atracao = res['atracao'];
			}
			if (res.parceiroList != null) {
				this.parceiroList = res.parceiroList;
			}

			this.helper.loadJS();	
			this.helper.timeOutStopLoading();

			if (this.helper.getCurrentUrl() == '/parceiro') {
				this.helper.scrollTo();
			}
		});
	}

	

	title = 'app works!';
}
