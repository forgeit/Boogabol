import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

import { GenericService } from '../utils/generic.service';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService extends GenericService {		
	constructor(private h: Http, private lss: LocalStorageService) { 
		super(h, lss);
		this.urlSrv += this.environment.module_cliente;
	}
		
	getFormValidator(): any {
		return {     
			id: '', 	      
			nome: ['', Validators.required],
			cpf: ['', Validators.pattern("[0-9]+")], 
			cep: ['', Validators.pattern("[0-9]+")], 
			endereco: '',
			cidade: '',
			telefone: '',
			email: ''
		}
	}
}
