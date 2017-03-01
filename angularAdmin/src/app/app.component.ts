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
			this.helper.orcamentoNaoLido = res;
			this.helper.stopLoading();
		});
		
		setTimeout(() => {
			this.orcamentoService.getNaoLidos().then(res => {
				this.helper.orcamentoNaoLido = res;
				this.helper.stopLoading();
			});
		}, 120000); //5min
	}

	modalOK(): void {
		this.helper.modalHidden = true;
		this.orcamentoService.removeFromUrl(this.helper.modalUrlApi).then(res => {
			this.helper.checkResponse(res).then(valid => {
				if (valid) { this.helper.modalResult = true; }
			});
		});
	}
}
