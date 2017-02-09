import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GenericService {
	public headers = new Headers({		
		'Content-Type': 'application/json' 		
	});	

	public urlSrv: string;
	environment:any = environment;

	constructor(public http: Http, private slimLoadingBarService: SlimLoadingBarService){
		this.urlSrv = this.environment.serverUrl + this.environment.urlPublic;
	}

	get(url: string): Promise<any> {		
		this.slimLoadingBarService.start();
		return this.defaultPromise(this.http.get(this.urlSrv+url, {headers: this.headers}));
	}

	defaultPromise(prom: any): Promise<any> {
		return prom.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}	
	
	private handleError(error: any): Promise<any> {
		alert('Erro ao conectar com o Servidor');	
		this.slimLoadingBarService.complete();	
		return Promise.reject(error.message || error);
	}

	
}