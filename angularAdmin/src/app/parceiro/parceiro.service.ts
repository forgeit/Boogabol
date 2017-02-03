import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

import { GenericService } from '../utils/generic.service';
import { Parceiro } from './parceiro';

@Injectable()
export class ParceiroService extends GenericService {		
	constructor(private h: Http, private lss: LocalStorageService) { 
		super(h, lss);
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
