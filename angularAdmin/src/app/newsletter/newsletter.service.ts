import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { GenericService } from '../utils/generic.service';
import { Newsletter } from './newsletter';

@Injectable()
export class NewsletterService extends GenericService {		
	constructor(private h: Http, private lss: LocalStorageService, private slbs: SlimLoadingBarService) { 
		super(h, lss, slbs);
		this.urlSrv += this.environment.module_newsletter;
	}		
}
