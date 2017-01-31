import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Atracao } 			from './atracao';
import { AtracaoService } 	from './atracao.service';

@Component({
	selector: 'app-admin',
	templateUrl: './atracao.component.html'
	//styleUrls: ['./app.component.css']
})

export class AtracaoComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: AtracaoService) {
		super(null);
		helper.setPageInfo('Lista Atração', this.environment.module_atracao);
	}

	list: Atracao[];

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



