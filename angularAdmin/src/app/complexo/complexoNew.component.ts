import { Component } 		from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Complexo } 		from './complexo';
import { ComplexoService } 	from './complexo.service';

@Component({
	selector: 'app-admin',
	templateUrl: './complexoNew.component.html'
	//styleUrls: ['./app.component.css']
})

export class ComplexoNewComponent extends GenericComponent {		

	constructor(private helper: Helper, private elemService: ComplexoService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_complexo;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Novo Complexo', this.environment.module_complexo);
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



