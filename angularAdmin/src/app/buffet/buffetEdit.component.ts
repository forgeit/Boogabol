import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { UploadService } 	from '../utils/upload.service';
import { Helper } 			from '../utils/helper';

import { Buffet } 			from './buffet';
import { BuffetService } 	from './buffet.service';

@Component({
	selector: 'app-admin',
	templateUrl: './buffetEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class BuffetEditComponent extends GenericComponent implements OnInit {		

	constructor(private helper: Helper, private elemService: BuffetService, private route: ActivatedRoute, fb: FormBuilder, private us: UploadService) {
		super(fb);
		this.compModule = this.environment.module_buffet;
		this.complexForm = fb.group(elemService.getFormValidator());
		helper.setPageInfo('Edição Ambiente', this.environment.module_buffet);
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



