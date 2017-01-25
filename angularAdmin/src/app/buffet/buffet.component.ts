import { Component, OnInit } from '@angular/core';
import { Helper } from '../helper';

import { Buffet } from './buffet';
import { BuffetService } from './buffet.service';

@Component({
	selector: 'app-admin',
	templateUrl: './buffet.component.html'
	//styleUrls: ['./app.component.css']
})

export class BuffetComponent implements OnInit {
	constructor(private helper: Helper, private bs: BuffetService) {}

	lista: Buffet[];
	
	ngOnInit(): void {
		this.bs.getList().then(lista => {
			this.lista = lista;
			this.helper.updateTable('tableFull');
		});			
		
	}
	
}



