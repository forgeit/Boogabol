import { Component } 		from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { TipoFesta } 		from './tipoFesta';
import { TipoFestaService } 	from './tipoFesta.service';

@Component({
	selector: 'app-admin',
	templateUrl: './tipoFestaNew.component.html'
	//styleUrls: ['./app.component.css']
})

export class TipoFestaNewComponent extends GenericComponent {		

	constructor(private helper: Helper, private elemService: TipoFestaService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_tipoFesta;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Novo Tipo de Festa', this.environment.module_tipoFesta);
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



