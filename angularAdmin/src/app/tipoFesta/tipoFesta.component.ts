import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { TipoFesta } 			from './tipoFesta';
import { TipoFestaService } 	from './tipoFesta.service';

@Component({
	selector: 'app-admin',
	templateUrl: './tipoFesta.component.html'
	//styleUrls: ['./app.component.css']
})

export class TipoFestaComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: TipoFestaService) {
		super(null);
		helper.setPageInfo('Lista Tipo de Festa', this.environment.module_tipoFesta);
	}

	list: TipoFesta[];

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



