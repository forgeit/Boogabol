import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Usuario } from '../usuario/usuario';

@Injectable()
export class LoginService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private jwt: string;
	private usuario: Usuario;

	constructor(private http: Http) { }

	isActive(): any {
		return true;
	}

	logout() {
        this.jwt = null;
        this.usuario = null;
    }

}
