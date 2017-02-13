import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';
import { TipoFesta }		 from '../model/tipoFesta';
import { Decoracao }		 from '../model/decoracao';

import { Orcamento }		 from '../model/orcamento';


@Component({
	selector: 'app-admin',
	templateUrl: './orcamento.component.html'
	//styleUrls: ['./app.component.css']
})
export class OrcamentoComponent implements OnInit {

	tipoFestaList: TipoFesta[];
	decoracaoList: Decoracao[];
	orcamento: Orcamento;

	btnHide: boolean;

	messageSuccess: string;
	messageError: string;

	constructor(private helper: Helper, private gs: GenericService) {				
		this.orcamento = new Orcamento(null,null,null,null,null,null,null,null,null,null,null,null,null);
	}

	ngOnInit(): void {		
		this.btnHide = false;
		this.helper.pageTitle = "Orçamento";

		this.gs.get('orcamento').then(res => {
			this.tipoFestaList = res.tipoFestaList;
			this.decoracaoList = res.decoracaoList;
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();

			this.helper.loadJmask();
			this.helper.updateMaskDate('data-mask');
		});	
	}		

	onSubmit() {
		if (!this.orcamento || !this.orcamento.nome || !this.orcamento.telefone || !this.orcamento.obs) {
			this.messageError = "Preencha os campos obrigatórios(*)";			
			this.messageSuccess = null;
		} else {
			this.messageError = null;
			this.messageSuccess = "Enviando...";
			this.btnHide = true;
			
			this.gs.post(this.orcamento, 'saveOrcamento').then(res=>{
				if (this.helper.environment.RET_OK == res.res) {
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
