import { Component, OnInit } from '@angular/core';

import { Helper } 			from '../utils/helper';

import { Buffet } 			from './buffet';
import { BuffetService } 	from './buffet.service';

@Component({
	selector: 'app-admin',
	templateUrl: './buffet.component.html'
	//styleUrls: ['./app.component.css']
})

export class BuffetComponent implements OnInit {
	constructor(private helper: Helper, private bs: BuffetService) {}

	list: Buffet[];
	
	ngOnInit(): void {
		this.bs.getList().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.list = res.dataRes;					
				} else {
					this.helper.updateTable('tableFull');
				}
			})
		});	
	}
	
}



