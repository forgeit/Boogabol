import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';

import { GenericService } from '../utils/generic.service';
import { Parceiro } from './parceiro';

@Injectable()
export class ParceiroService extends GenericService {		
	constructor(private h: Http) { 
		super(h);
		this.urlSrv += this.environment.module_parceiro;
	}
		
	getFormValidator(): any {
		return {     
			id: '', 	      
			nome: ['', [<any>Validators.required]],
			link: ['', [<any>Validators.required]],
			id_imagem: ''		
		}
	}
}
