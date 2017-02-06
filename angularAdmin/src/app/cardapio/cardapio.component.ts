import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Cardapio } 			from './cardapio';
import { CardapioService } 	from './cardapio.service';

@Component({
	selector: 'app-admin',
	templateUrl: './cardapio.component.html'
	//styleUrls: ['./app.component.css']
})

export class CardapioComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: CardapioService) {
		super(null);
		helper.setPageInfo('Lista Cardápio', this.environment.module_cardapio);
	}

	list: Cardapio[];

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



