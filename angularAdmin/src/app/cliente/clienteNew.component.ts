import { Component } 		from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Cliente } 			from './cliente';
import { ClienteService } 	from './cliente.service';

import { Cidade }		 	from './cidade';

@Component({
	selector: 'app-admin',
	templateUrl: './clienteNew.component.html'
	//styleUrls: ['./app.component.css']
})

export class ClienteNewComponent extends GenericComponent {	

	constructor(private helper: Helper, private elemService: ClienteService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_cliente;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Novo Cliente', this.environment.module_cliente);

		this.helper.updateMask();
	}

	listAux2: Cidade[];


	ngOnInit(): void {
		this.elemService.getCidades().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.listAux2 = res.dataRes;
				}
			});
		});
	}

	onFileChange(event) {
		this.fileUp = event.srcElement.files;
	}

	submitForm(value: any):void{		
		if (this.complexForm.valid) {
			this.sendData(value);			
		}
	}	

	sendData(value: any):void {
		this.elemService.insert(value).then(res => {
			this.helper.checkResponse(res).then(valid => {
				if (valid) {
					this.helper.navigate(this.compModule+'/edit', res.dataRes);
				}
			});
		});		
	}
}



