import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class GenericService {
	public headers = new Headers({		
		'Content-Type': 'application/json' 		
	});	

	public urlSrv: string;
	environment:any = environment;

	constructor(public http: Http){
		this.urlSrv = this.environment.serverUrl + this.environment.urlPublic;
	}

	get(url: string): Promise<any> {		
		return this.defaultPromise(this.http.get(this.urlSrv+url, {headers: this.headers}));
	}

	post(elem: any, url: string): Promise<any> {		
		return this.defaultPromise(this.http.post(this.urlSrv+url, JSON.stringify(elem), {headers: this.headers}));
	}

	defaultPromise(prom: any): Promise<any> {
		return prom.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}	
	
	private handleError(error: any): Promise<any> {
		alert('Erro ao conectar com o Servidor');	
		return Promise.reject(error.message || error);
	}

	
}