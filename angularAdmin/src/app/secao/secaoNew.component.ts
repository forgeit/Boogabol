import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Item }				from '../item/item';
import { ItemService } 		from '../item/item.service';

import { Secao } 		from './secao';
import { SecaoService } 	from './secao.service';

@Component({
	selector: 'app-admin',
	templateUrl: './secaoNew.component.html'
	//styleUrls: ['./app.component.css']
})

export class SecaoNewComponent extends GenericComponent implements OnInit {		

	listAux: Item[];

	constructor(private helper: Helper, private elemService: SecaoService, private auxService: ItemService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_secao;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Nova Seção', this.environment.module_secao);
	}

	ngOnInit(): void {
		this.auxService.getList().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.listAux = res.dataRes;										
				}
			})
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
					this.helper.navigate(this.compModule+'/list', null);
				}
			});
		});		
	}
}



