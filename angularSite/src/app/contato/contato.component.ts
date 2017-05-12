import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';

import { Contato }			 from '../model/contato';


@Component({
	selector: 'app-admin',
	templateUrl: './contato.component.html'
	//styleUrls: ['./app.component.css']
})
export class ContatoComponent implements OnInit {

	contato: Contato;
	messageError: string;
	messageSuccess: string;

	btnHide: boolean;

	constructor(private helper: Helper, private gs: GenericService) {				
	}

	ngOnInit(): void {	
		this.btnHide = false;
		this.contato = new Contato('','','','');
		this.messageError = '';
		this.messageSuccess = '';

		this.helper.pageInfo("Contato", null);

		this.helper.loadJS();	
		this.helper.timeOutStopLoading();		

		this.helper.loadJmask();
		this.helper.updateMask();
	}

	onSubmit() {
		if (!this.contato || !this.contato.nome || !this.contato.email || !this.contato.telefone || !this.contato.mensagem) {
			this.messageError = "Preencha todos os campos";
			this.messageSuccess = null;
		} else {
			this.messageSuccess = "Enviando...";
			this.messageError = null;
			this.btnHide = true;

			this.gs.post(this.contato, 'cardapio').then(res => {
				if (this.helper.environment.RET_OK == res.res) {
					this.contato = new Contato('','','','');				
					this.messageSuccess = res.message;
					this.btnHide = true;
				} else {
					this.messageSuccess = null;
					this.messageError = res.message;
					this.btnHide = false;
				}			
			});	
		}
	}
	
}
