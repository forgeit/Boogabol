import { Component } 		from '@angular/core';

import { Helper } 			from './utils/helper';
import { OrcamentoService } from './orcamento/orcamento.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(public helper: Helper, private orcamentoService: OrcamentoService) {
		this.orcamentoService.getNaoLidos().then(res => {
			this.helper.orcamentoNaoLido = res.count;
		});
		
		setTimeout(() => {
			this.orcamentoService.getNaoLidos().then(res => {
				this.helper.orcamentoNaoLido = res.count;
			});
		}, 120000); //5min
	}
}
