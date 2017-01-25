import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private urlServ = 'login/';	

	constructor(private http: Http) { }

	isActive(): any {
		return true;
	}

}
