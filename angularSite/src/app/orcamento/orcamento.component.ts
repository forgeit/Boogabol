import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';

import { Orcamento }		 from '../model/orcamento';


@Component({
	selector: 'app-admin',
	templateUrl: './orcamento.component.html'
	//styleUrls: ['./app.component.css']
})
export class OrcamentoComponent implements OnInit {

	orcamento: Orcamento;
	ondeEncontrou: string[] = ["Amigos", "E-mail", "Facebook", "Instagram", "Internet", "Outros"];

	messageSuccess: string;
	messageError: string;


	constructor(private helper: Helper, private gs: GenericService) {				
		this.orcamento = new Orcamento(null,null,null,null,null,null,null,null,null,'Amigos');
	}

	ngOnInit(): void {		
		this.helper.pageInfo("Orçamento", null);
		
		this.gs.get('orcamento').then(res => {
			this.helper.loadJS();	
			this.helper.timeOutStopLoading();

			this.helper.loadJmask();
			this.helper.updateMask();
		});	
	}		

	onSubmit() {
		if (!this.orcamento || !this.orcamento.nome || !this.orcamento.telefone || !this.orcamento.obs) {
			this.messageError = "Preencha os campos obrigatórios(*)";			
			this.messageSuccess = null;
		} else {
			this.messageError = null;
			this.messageSuccess = "Enviando...";
			
			this.gs.post(this.orcamento, 'saveOrcamento').then(res=>{
				if (this.helper.environment.RET_OK == res.res) {
					this.messageSuccess = res.message;	
					this.orcamento = new Orcamento(null,null,null,null,null,null,null,null,null,'Amigos');				
				} else {
					this.messageSuccess = null;
					this.messageError = res.message;
				}
			});
		}
	}

	
}
