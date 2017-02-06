import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { LoginEdit } 			from './loginEdit';
import { LoginService } 	from './login.service';

@Component({
	selector: 'app-admin',
	templateUrl: './loginEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class LoginEditComponent extends GenericComponent {		

	constructor(private helper: Helper, private elemService: LoginService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.complexForm = fb.group(elemService.getFormValidator());
		this.compModule = this.environment.module_usuario;
		helper.setPageInfo('Edição Login', this.environment.module_usuario);
	}
	
	submitForm(value: any):void{		
		if (this.complexForm.valid) {
			let newLoginEdit = new LoginEdit(
				value.login,
				this.helper.cryptPassword(value.oldPassword),
				this.helper.cryptPassword(value.newPassword),
				this.helper.cryptPassword(value.newPasswordAgain)
				);
			this.elemService.update(newLoginEdit).then(res => {
				this.helper.checkResponse(res).then(valid => {
					if (valid) {
						this.helper.navigate('/', null);
					}
				});
			});			
		}
	}
}



