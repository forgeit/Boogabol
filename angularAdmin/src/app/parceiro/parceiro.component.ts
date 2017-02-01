import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Parceiro } 			from './parceiro';
import { ParceiroService } 	from './parceiro.service';

@Component({
	selector: 'app-admin',
	templateUrl: './parceiro.component.html'
	//styleUrls: ['./app.component.css']
})

export class ParceiroComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: ParceiroService) {
		super(null);
		helper.setPageInfo('Lista Parceiro', this.environment.module_parceiro);
	}

	list: Parceiro[];

	ngOnInit(): void {
		this.loadList();
	}

	loadList() {
		this.service.getList().then(res => {
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
		this.service.remove(id).then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.loadList();
				}
			})
		})
	}
	
}