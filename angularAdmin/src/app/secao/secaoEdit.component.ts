import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Item }				from '../item/item';
import { ItemService } 		from '../item/item.service';

import { Secao } 			from './secao';
import { SecaoService } 	from './secao.service';

@Component({
	selector: 'app-admin',
	templateUrl: './secaoEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class SecaoEditComponent extends GenericComponent implements OnInit {		

	itemSelected: number;
	listElemAux: Item[]; 
	listAux: Item[];

	constructor(private helper: Helper, private elemService: SecaoService, private auxService: ItemService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_secao;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Edição Seção', this.environment.module_secao);
	}

	ngOnInit(): void {
		this.route.params.forEach(
			(params : Params) => {
				this.id = params["id"];
			});
		
		this.elemService.getElem(this.id).then(elem => {
			(<FormGroup>this.complexForm).setValue(elem, { onlySelf: true });	
		});				

		this.elemService.findItens(this.id).then(res => {
			this.listAux = res;
		});

		this.auxService.getList().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (res.dataRes.length > 0) {
					this.itemSelected = res.dataRes[0];
				}
				if (valid) {
					this.listElemAux = res.dataRes;										
				}
			})
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

	addItem(): void {
		this.listAux.push(this.listElemAux[this.itemSelected]);
	}

	removeItem(index: number): void {		
		this.listAux.splice(index, 1);		
	}

	submitFormAux():void {
		this.elemService.saveItens(this.listAux).then(res => {
			this.helper.checkResponse(res).then(valid => {
				if (valid) {
					this.helper.navigate(this.compModule+'/list', null);
				}
			});
		});
	}
}



