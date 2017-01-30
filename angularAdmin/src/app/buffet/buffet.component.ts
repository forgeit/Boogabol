import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Buffet } 			from './buffet';
import { BuffetService } 	from './buffet.service';

@Component({
	selector: 'app-admin',
	templateUrl: './buffet.component.html'
	//styleUrls: ['./app.component.css']
})

export class BuffetComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private bs: BuffetService) {
		super(null);
		helper.setPageInfo('Lista Buffet', this.environment.module_buffet);
	}

	list: Buffet[];

	ngOnInit(): void {
		this.loadList();
	}

	loadList() {
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

	onRemove(id) {
		this.bs.remove(id).then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.loadList();
				}
			})
		})
	}
	
}


