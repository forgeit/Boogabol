import 'rxjs/add/operator/switchMap';
import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Helper } 	from '../utils/helper';

import { Buffet } 			from './buffet';
import { BuffetService } 	from './buffet.service';

@Component({
	selector: 'app-admin',
	templateUrl: './buffetEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class BuffetEditComponent implements OnInit {
	//elem: Buffet = <Buffet>{};
	id: number;
	complexForm: FormGroup;	

	constructor(
		private helper: Helper, 
		private elemService: BuffetService,
		private route: ActivatedRoute,
		fb: FormBuilder
		) {
		
		this.complexForm = fb.group(elemService.getFormValidator());
	}


	ngOnInit(): void {
		this.route.params.forEach(
			(params : Params) => {
				this.id = params["id"];
			});
		
		this.elemService.getElem(this.id)		
		.then(elem => {
				(<FormGroup>this.complexForm)
            		.setValue(elem, { onlySelf: true });				
			});		


	}
	
	submitForm(value: any):void{
		if (this.complexForm.valid) {
	    	console.log('Reactive Form Data: ')
	    	console.log(value);
		}
  	}	
}



