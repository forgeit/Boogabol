import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { RelatorioService } 	from './relatorio.service';

@Component({
	selector: 'app-admin',
	templateUrl: './relatorio.component.html'
	//styleUrls: ['./app.component.css']
})

export class RelatorioComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: RelatorioService) {
		super(null);
		helper.setPageInfo('Relatório', this.environment.module_relatorio);
	}

	list: any[];

	ngOnInit(): void {
		this.loadList();
	}

	loadList() {
		this.service.getList().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.list = res.dataRes;					
					this.helper.updateTable('tableFull', false, true);
				}
			})
		});	
	}
	
}



