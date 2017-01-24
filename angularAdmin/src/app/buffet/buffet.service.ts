import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
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

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
