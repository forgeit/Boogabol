import { Component, OnInit } from '@angular/core';

import { Buffet } from './buffet';
import { BuffetService } from './buffet.service';

@Component({
	selector: 'app-admin',
	templateUrl: './buffet.component.html'
	//styleUrls: ['./app.component.css']
})

export class BuffetComponent implements OnInit {
	constructor(private bs: BuffetService) {}

	lista: Buffet[];
	
	ngOnInit(): void {
		this.bs.getList().then(lista => {this.lista = lista});			
	}
	
}



