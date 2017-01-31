import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Decoracao } 			from './decoracao';
import { DecoracaoService } 	from './decoracao.service';

@Component({
	selector: 'app-admin',
	templateUrl: './decoracao.component.html'
	//styleUrls: ['./app.component.css']
})

export class DecoracaoComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: DecoracaoService) {
		super(null);
		helper.setPageInfo('Lista Decoração', this.environment.module_decoracao);
	}

	list: Decoracao[];

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



