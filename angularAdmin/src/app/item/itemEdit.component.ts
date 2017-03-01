import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Item } 			from './item';
import { ItemService } 	from './item.service';

@Component({
	selector: 'app-admin',
	templateUrl: './itemEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class ItemEditComponent extends GenericComponent implements OnInit {		

	constructor(private helper: Helper, private elemService: ItemService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_item;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Edição Item', this.environment.module_item);
	}

	ngOnInit(): void {
		this.route.params.forEach(
			(params : Params) => {
				this.id = params["id"];
			});
		
		this.elemService.getElem(this.id).then(elem => {
			(<FormGroup>this.complexForm).setValue(elem, { onlySelf: true });	
			this.helper.stopLoading();			
		});				
	}

	onFileChange(event) {
		this.fileUp = event.srcElement.files;
	}
	
	submitForm(value: any):void{		
		if (this.complexForm.valid) {
			this.elemService.update(value).then(res => {
				this.helper.checkResponse(res).then(valid => {
					if (valid) {
						this.helper.navigate(this.compModule+'/list', null);
					}
				});
			});			
		}
	}	

	sendData(value: any):void {
		
	}
}



