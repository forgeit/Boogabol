import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { GenericService } from '../utils/generic.service';
import { Decoracao } from './decoracao';

@Injectable()
export class DecoracaoService extends GenericService {		
	constructor(private h: Http, private lss: LocalStorageService, private slbs: SlimLoadingBarService) { 
		super(h, lss, slbs);
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
