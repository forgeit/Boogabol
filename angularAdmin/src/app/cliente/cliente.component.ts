import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Cliente } 			from './cliente';
import { ClienteService } 	from './cliente.service';

@Component({
	selector: 'app-admin',
	templateUrl: './cliente.component.html'
	//styleUrls: ['./app.component.css']
})

export class ClienteComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: ClienteService) {
		super(null);
		helper.setPageInfo('Lista Cliente', this.environment.module_cliente);
	}

	list: Cliente[];

	ngOnInit(): void {
		this.loadList();
	}

	loadList() {
		this.service.getList().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.list = res.dataRes;					
					this.helper.updateTable('tableFull', true, true);
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



