import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Newsletter } 			from './newsletter';
import { NewsletterService } 	from './newsletter.service';

@Component({
	selector: 'app-admin',
	templateUrl: './newsletter.component.html'
	//styleUrls: ['./app.component.css']
})

export class NewsletterComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper, private service: NewsletterService) {
		super(null);
		helper.setPageInfo('Lista Orçamento', this.environment.module_newsletter);
	}

	list: Newsletter[];

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


