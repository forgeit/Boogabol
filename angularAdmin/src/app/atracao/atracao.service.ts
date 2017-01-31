import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';

import { GenericService } from '../utils/generic.service';
import { Atracao } from './atracao';

@Injectable()
export class AtracaoService extends GenericService {		
	constructor(private h: Http) { 
		super(h);
		this.urlSrv += this.environment.module_atracao;
	}
		
	getFormValidator(): any {
		return {     
			id: '', 	      
			titulo: ['', [<any>Validators.required]],
			descricao: '',
			id_imagem: ''		
		}
	}
}
