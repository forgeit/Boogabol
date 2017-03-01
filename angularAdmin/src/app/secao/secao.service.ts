import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Helper } from '../utils/helper';

import { GenericService } from '../utils/generic.service';
import { Secao } from './secao';

@Injectable()
export class SecaoService extends GenericService {		
	constructor(private h: Http, private lss: LocalStorageService, private slbs: SlimLoadingBarService, private hp: Helper) { 
		super(h, lss, slbs, hp);
		this.urlSrv += this.environment.module_secao;
	}

	findItens(id: number): Promise<any> {	
		this.hp.startLoading();
		return this.defaultPromise(this.http.get(this.urlSrv+"/findItens/"+id, {headers: this.getHeaderJwt()}));
	}

	saveItens(elem: any): Promise<any> {	
		this.hp.startLoading();
		return this.defaultPromise(this.http.put(this.urlSrv+"/updateItens", JSON.stringify(elem), {headers: this.getHeaderJwt()}));
	}
	
	getFormValidator(): any {
		return {     
			id: '', 	      
			descricao: ''
		}
	}
}
