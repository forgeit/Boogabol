import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { GenericService } from '../utils/generic.service';
import { Orcamento } from './orcamento';

@Injectable()
export class OrcamentoService extends GenericService {		
	constructor(private h: Http, private lss: LocalStorageService, private slbs: SlimLoadingBarService) { 
		super(h, lss, slbs);
		this.urlSrv += this.environment.module_orcamento;
	}		

	getNaoLidos(): Promise<any> {		
		this.slbs.start();
		return this.defaultPromise(this.http.get(this.urlSrv+"/findNaoLidos", {headers: this.getHeaderJwt()}));
	}
}
