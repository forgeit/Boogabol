import { Component, OnInit } 	from '@angular/core';
import { Router } 		from '@angular/router';

import { GenericService }	from '../utils/generic.service';
import { Helper }			from '../utils/helper';

import { Cardapio } 	from '../model/cardapio';
import { Buffet } 	from '../model/buffet';
import { TipoFesta } 	from '../model/tipoFesta';
import { Atracao } 	from '../model/atracao';


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

	constructor(private helper: Helper, private gs: GenericService) {
		//helper.setPageInfo('Dashboard');

		this.cardapio = new Cardapio(null,null,null,null);
		this.buffet = new Buffet(null,null,null,null);
		this.tipoFesta = new TipoFesta(null,null,null,null);
		this.atracao = new Atracao(null,null,null,null);
	}

	ngOnInit(): void {
		this.gs.get('home').then(res => {
			this.cardapio = res['cardapio'];
			this.buffet = res['buffet'];
			this.tipoFesta = res['tipoFesta'];
			this.atracao = res['atracao'];
		});
	}

	

	title = 'app works!';
}
