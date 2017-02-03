import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Cliente } 			from './cliente';
import { ClienteService } 	from './cliente.service';

import { AniversarianteService } 	from './aniversariante.service';
import { Aniversariante } 	from './aniversariante';

@Component({
	selector: 'app-admin',
	templateUrl: './clienteEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class ClienteEditComponent extends GenericComponent implements OnInit {		

	listAux: Aniversariante[];

	constructor(private helper: Helper, private elemService: ClienteService, private elemAuxService: AniversarianteService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_cliente;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Edição Cliente', this.environment.module_cliente);
	}

	ngOnInit(): void {
		this.route.params.forEach(
			(params : Params) => {
				this.id = params["id"];
			});
		
		this.elemService.getElem(this.id).then(elem => {
			(<FormGroup>this.complexForm).setValue(elem, { onlySelf: true });						
			this.getListAux();
		});				
	}

	getListAux() {
		this.elemAuxService.getElem(this.id).then(res => {
			this.listAux = res;					
			this.helper.updateMaskDate('mask-date');
			if (this.listAux == null) {
				this.listAux = [];
			}
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

	addItem():void {
		this.listAux.push(new Aniversariante(null,'','',this.id));
		this.helper.updateMaskDate('mask-date');
	}

	submitFormAux():void {
		this.elemAuxService.update(this.listAux).then(res => {
			this.helper.checkResponse(res).then(valid => {
				if (valid) {
					this.getListAux();
				}
			});
		});
	}

	removeItem(index: number, elem: Aniversariante): void {
		this.elemAuxService.remove(elem.id).then(res => {
			this.helper.checkResponse(res).then(valid => {
				if (valid) {
					this.listAux.splice(index, 1);
				}
			});
		});	
	}
	
}



