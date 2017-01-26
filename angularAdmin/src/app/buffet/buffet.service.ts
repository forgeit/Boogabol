import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import { Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

import { Buffet } from './buffet';

@Injectable()
export class BuffetService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private urlServ = 'buffet/';
	environment:any = environment;

	constructor(private http: Http) { 
		this.urlServ = environment.serverUrl + this.urlServ;
	}

	getList(): Promise<any> {		
		return this.defaultPromise(this.http.get(this.urlServ));
	}

	getElem(id: number): Promise<any> {
		return this.defaultPromise(this.http.get(this.urlServ+"find/"+id));
	}

	update(elem: Buffet): Promise<any> {
		return this.defaultPromise(this.http.put(this.urlServ+"update", {headers: this.headers}));
	}

	insert(elem: Buffet): Promise<any> {
		return this.defaultPromise(this.http.post(this.urlServ+"insert/", {headers: this.headers}));		
	}

	remove(id: number): Promise<any> {
		return this.defaultPromise(this.http.delete(this.urlServ));		
	}


	

	defaultPromise(prom: any): Promise<any> {
		return prom.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}	

	getFormValidator(): any {
		return {     
			id: '', 	      
			titulo: ['', [<any>Validators.required]],
			descricao: '',			
			id_imagem: ''
		}
	}
	
	private handleError(error: any): Promise<any> {
		alert('Erro ao conectar com o Servidor');		
		return Promise.reject(error.message || error);
	}

}
