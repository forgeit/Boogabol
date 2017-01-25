import { Injectable } from '@angular/core';
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

	constructor(private http: Http) { }

	getList(): Promise<Buffet[]> {
		return this.http.get(environment.serverUrl+this.urlServ)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}

	getElem(id: number): Promise<Buffet> {
		return this.http.get(environment.serverUrl+this.urlServ+"find/"+id)
		.toPromise()
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
