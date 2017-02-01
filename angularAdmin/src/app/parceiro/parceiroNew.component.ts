import { Component } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Parceiro } 			from './parceiro';
import { ParceiroService } 	from './parceiro.service';

@Component({
	selector: 'app-admin',
	templateUrl: './parceiroNew.component.html'
	//styleUrls: ['./app.component.css']
})

export class ParceiroNewComponent extends GenericComponent {		

	constructor(private helper: Helper, private elemService: ParceiroService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_parceiro;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Novo Parceiro', this.environment.module_parceiro);
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



