import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { UploadService } 	from '../utils/upload.service';
import { Helper } 			from '../utils/helper';

import { Pacote } 			from './pacote';
import { PacoteService } 	from './pacote.service';

import { Secao } 			from '../secao/secao';
import { SecaoService } 	from '../secao/secao.service';

@Component({
	selector: 'app-admin',
	templateUrl: './pacoteEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class PacoteEditComponent extends GenericComponent implements OnInit {		

	itemSelected: number;
	listElemAux: Secao[]; 
	listAux: Secao[];

	constructor(private helper: Helper, private elemService: PacoteService, private auxService: SecaoService, private route: ActivatedRoute, fb: FormBuilder, private us: UploadService) {
		super(fb);
		this.compModule = this.environment.module_pacote;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Edição Pacote', this.environment.module_pacote);
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

		this.elemService.findSecoes(this.id).then(res => {
			this.listAux = res;
		});

		this.auxService.getList().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (res.dataRes.length > 0) {
					this.itemSelected = res.dataRes[0].id;
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

			if (this.fileUp !== undefined) {
				this.us.makeFileRequest([value.id, this.compModule], this.fileUp).subscribe((res) => {					
					this.helper.checkResponse(res).then(valid => {					
						if (valid) {
							this.sendData(value);
						}
					});
				});
			} else {
				this.sendData(value);
			}		
		}
	}	

	sendData(value: any):void {
		this.elemService.update(value).then(res => {
			this.helper.checkResponse(res).then(valid => {
				if (valid) {
					this.helper.navigate(this.compModule+'/list', null);
				}
			});
		});		
	}

	addItem(): void {		
		this.listAux.push(this.listElemAux[this.itemSelected]);
	}

	removeItem(index: number): void {		
		this.listAux.splice(index, 1);		
	}

	submitFormAux():void {
		let listSend = new PacoteSecao(this.id, this.listAux);

		this.elemService.saveSecoes(listSend).then(res => {
			this.helper.checkResponse(res).then(valid => {
				if (valid) {
					this.helper.navigate(this.compModule+'/list', null);
				}
			});
		});
	}
}

export class PacoteSecao {
	constructor (
		public id_pacote: number,
		public list: Secao[]
		){}		
}

