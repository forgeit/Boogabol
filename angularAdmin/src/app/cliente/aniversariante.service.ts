import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';

import { GenericService } from '../utils/generic.service';
import { Aniversariante } from './aniversariante';

@Injectable()
export class AniversarianteService extends GenericService {		
	constructor(private h: Http) { 
		super(h);
		this.urlSrv += this.environment.module_aniversariante;
	}
}
