import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Helper } from '../utils/helper';

import { GenericService } from '../utils/generic.service';
import { Equipe } from './equipe';

@Injectable()
export class EquipeService extends GenericService {		
	constructor(private h: Http, private lss: LocalStorageService, private slbs: SlimLoadingBarService, private hp: Helper) { 
		super(h, lss, slbs, hp);
		this.urlSrv += this.environment.module_equipe;
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
