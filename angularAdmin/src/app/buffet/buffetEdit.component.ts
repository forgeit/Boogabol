import 'rxjs/add/operator/switchMap';
import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';

import { Helper } 	from '../helper';

import { Buffet } 			from './buffet';
import { BuffetService } 	from './buffet.service';

@Component({
	selector: 'app-admin',
	templateUrl: './buffetEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class BuffetEditComponent implements OnInit {
	elem: Buffet;
	id: number;

	constructor(
		private helper: Helper, 
		private elemService: BuffetService,
		private route: ActivatedRoute
		) {}


	ngOnInit(): void {
		//console.log(this.route.params['id']);
		this.route.params.forEach(
			(params : Params) => {
				this.id = params["id"];
			}
			);
		
		this.elemService.getElem(this.id)		
		.then(elem => this.elem = elem);		
	}
	
}



