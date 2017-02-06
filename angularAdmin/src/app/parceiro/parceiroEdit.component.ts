import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { UploadService } 	from '../utils/upload.service';
import { Helper } 			from '../utils/helper';

import { Parceiro } 			from './parceiro';
import { ParceiroService } 	from './parceiro.service';

@Component({
	selector: 'app-admin',
	templateUrl: './parceiroEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class ParceiroEditComponent extends GenericComponent implements OnInit {		

	constructor(private helper: Helper, private elemService: ParceiroService, private route: ActivatedRoute, fb: FormBuilder, private us: UploadService) {
		super(fb);
		this.compModule = this.environment.module_parceiro;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Edição Parceiro', this.environment.module_parceiro);
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
}



