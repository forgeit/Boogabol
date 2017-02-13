import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Orcamento } 			from './orcamento';
import { OrcamentoService } 	from './orcamento.service';

@Component({
	selector: 'app-admin',
	templateUrl: './orcamento.component.html'
	//styleUrls: ['./app.component.css']
})

export class OrcamentoComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: OrcamentoService) {
		super(null);
		helper.setPageInfo('Lista Orçamento', this.environment.module_orcamento);
	}

	list: Orcamento[];

	ngOnInit(): void {
		this.loadList();
	}

	loadList() {
		this.service.getList().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.list = res.dataRes;					
					this.helper.updateTable('tableFull', true, false);
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



