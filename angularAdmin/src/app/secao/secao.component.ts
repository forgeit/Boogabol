import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Secao } 			from './secao';
import { SecaoService } 	from './secao.service';

@Component({
	selector: 'app-admin',
	templateUrl: './secao.component.html'
	//styleUrls: ['./app.component.css']
})

export class SecaoComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: SecaoService) {
		super(null);
		helper.setPageInfo('Lista Seção', this.environment.module_secao);
	}

	list: Secao[];

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

	onRemove(elem) {
		this.helper.modalShow(elem.titulo, this.helper.activeMenu+"/remove/"+elem.id);		
		let interval = setInterval(() => {
			if (this.helper.modalResult !== null) { 								
				clearInterval(interval);  
				if (this.helper.modalResult) { this.loadList(); }
			}
		}, 1000);
	}
	
}



