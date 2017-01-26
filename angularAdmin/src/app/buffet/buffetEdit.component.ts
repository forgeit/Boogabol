import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

import { UploadService } 	from '../utils/upload.service';
import { Helper } 			from '../utils/helper';

import { Buffet } 			from './buffet';
import { BuffetService } 	from './buffet.service';

@Component({
	selector: 'app-admin',
	templateUrl: './buffetEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class BuffetEditComponent implements OnInit {
	//elem: Buffet = <Buffet>{};

	compModule: string;
	fileUp: any;
	id: number;
	complexForm: FormGroup;	

	constructor(
		private helper: Helper, 
		private elemService: BuffetService,
		private route: ActivatedRoute,
		fb: FormBuilder,
		private us: UploadService
		) {
		this.compModule = environment.module_buffet;
		this.complexForm = fb.group(elemService.getFormValidator());
	}


	ngOnInit(): void {
		this.route.params.forEach(
			(params : Params) => {
				this.id = params["id"];
			});
		
		this.elemService.getElem(this.id).then(elem => {
			(<FormGroup>this.complexForm).setValue(elem, { onlySelf: true });				
		});		

	}

	onFileChange(event) {
		this.fileUp = event.srcElement.files;
	}
	
	submitForm(value: any):void{		
		if (this.fileUp !== undefined) {
			this.us.makeFileRequest([value.id], this.fileUp).subscribe(() => {
				console.log('enviado');
			});
		}
		if (this.complexForm.valid) {
			console.log('Reactive Form Data: ')
			console.log(value);
		}
	}	
}



