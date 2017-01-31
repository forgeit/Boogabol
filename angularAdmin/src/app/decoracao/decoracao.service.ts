import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';

import { GenericService } from '../utils/generic.service';
import { Decoracao } from './decoracao';

@Injectable()
export class DecoracaoService extends GenericService {		
	constructor(private h: Http) { 
		super(h);
		this.urlSrv += this.environment.module_decoracao;
	}
		
	getFormValidator(): any {
		return {     
			id: '', 	      
			titulo: ['', [<any>Validators.required]],
			descricao: ''
		}
	}
}
