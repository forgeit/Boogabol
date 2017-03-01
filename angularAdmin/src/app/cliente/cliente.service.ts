import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Helper } from '../utils/helper';

import { GenericService } from '../utils/generic.service';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService extends GenericService {		
	constructor(private h: Http, private lss: LocalStorageService, private slbs: SlimLoadingBarService, private hp: Helper) { 
		super(h, lss, slbs, hp);
		this.urlSrv += this.environment.module_cliente;
	}

	getCidades(): Promise<any> {		
		this.hp.startLoading();
		return this.defaultPromise(this.h.get(this.environment.serverUrl+this.environment.module_cidade, {headers: this.getHeaderJwt()}));
	}
		
	getFormValidator(): any {
		return {     
			id: '', 	      
			nome: ['', Validators.required],
			cpf: '', 
			cep: ['', Validators.pattern("[0-9]+")], 
			endereco: '',
			id_cidade: '',
			telefone: '',
			email: ''
		}
	}
}
