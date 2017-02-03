import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

import { GenericService } from '../utils/generic.service';
import { Usuario } from '../usuario/usuario';


@Injectable()
export class LoginService extends GenericService {
	
	private jwt: string;
	public usuario: Usuario;

	constructor(private h: Http, private lss: LocalStorageService) { 
		super(h, lss);
		this.urlSrv += this.environment.module_usuario;
	}

	isActive(): any {
        if (this.getJwt() && this.getUsuario()) {
            return true;            
        } else {
            return false;
        }
    }

    login(elem: Usuario): Promise<any> {
        return this.defaultPromise(this.http.post(this.urlSrv+"/login", JSON.stringify(elem), {headers: this.headers}));		
    }

    logout() {
        this.localStorageService.remove('usuario');
        this.localStorageService.remove('jwt');
    }

    setUsuario(usuario: Usuario) {
        this.localStorageService.set('usuario', usuario);
    }

    getUsuario():Usuario {
        return <Usuario> this.localStorageService.get('usuario');
    }

    setJwt(jwt: string) {
    	this.localStorageService.set('jwt', jwt);
    }

    getJwt(): any {
    	return this.localStorageService.get('jwt');
    }

}
