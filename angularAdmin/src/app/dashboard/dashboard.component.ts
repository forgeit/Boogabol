import { Component } 	from '@angular/core';
import { Router } 		from '@angular/router';

import { Helper }				from '../utils/helper';
import { GenericComponent }		from '../utils/generic.component';
import { OrcamentoService }		from '../orcamento/orcamento.service';

@Component({
	selector: 'app-admin',
	templateUrl: './dashboard.component.html'
	//styleUrls: ['./app.component.css']
})
export class DashboardComponent extends GenericComponent {
	constructor(public helper: Helper, private orcamentoService: OrcamentoService) {
		super(null);
		helper.setPageInfo('Dashboard', this.environment.module_dashboard);

		this.orcamentoService.getNaoLidos().then(res => {
			this.helper.orcamentoNaoLido = res;			
			this.helper.stopLoading();
		});
	}
	
}
