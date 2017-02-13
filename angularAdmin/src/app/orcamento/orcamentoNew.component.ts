import { Component } 		from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Orcamento } 		from './orcamento';
import { OrcamentoService } 	from './orcamento.service';

@Component({
	selector: 'app-admin',
	templateUrl: './orcamentoNew.component.html'
	//styleUrls: ['./app.component.css']
})

export class OrcamentoNewComponent extends GenericComponent {		

	constructor(private helper: Helper, private elemService: OrcamentoService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_orcamento;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Nova Decoração', this.environment.module_orcamento);
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
					this.helper.navigate(this.compModule+'/list', null);
				}
			});
		});		
	}
}



