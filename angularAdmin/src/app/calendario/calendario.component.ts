import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

@Component({
	selector: 'app-admin',
	templateUrl: './calendario.component.html'
	//styleUrls: ['./app.component.css']
})

export class CalendarioComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;

	constructor(private helper: Helper) {
		super(null);
		helper.setPageInfo('Calendário', this.environment.module_calendario);
	}

	ngOnInit(): void {
	}

	loadCalendario() {
	}

	onRemove(elem) {
	}
	
}



