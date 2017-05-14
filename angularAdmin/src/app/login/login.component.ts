import { Component, OnInit } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper } 	 from '../utils/helper';
import { AuthGuard } from '../utils/guard';
import { GenericComponent } from '../utils/generic.component';

import { LoginService } from './login.service';

import { Usuario } from '../usuario/usuario';

@Component({
	selector: 'app-admin',
	templateUrl: './login.component.html'
})

export class LoginComponent extends GenericComponent implements OnInit {
	constructor(private helper: Helper, private service: LoginService) {
		super(null);		
		this.usuario = new Usuario(null,null,null,null);
	}

	public usuario: Usuario;
	public msgError: string = "";

	ngOnInit(): void {
		if (this.helper.getCurrentUrl() == '/login/out') {
			this.service.logout();
		}
	}

	submitForm(): void {				
		let cryptPass = this.helper.cryptPassword(this.usuario.senha);
		this.service.login(new Usuario(null, null, this.usuario.login, cryptPass)).then(res => {
			this.msgError = res.message;
			if (res.res == this.environment.RET_OK) {				
				this.service.setUsuario(res.dataRes.usuario);
				this.service.setJwt(res.dataRes.jwt);
				this.helper.navigate("/dashboard", null);
			}
		});
	}
	
}



