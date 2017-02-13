import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

import { Orcamento } 			from './orcamento';
import { OrcamentoService } 	from './orcamento.service';

@Component({
	selector: 'app-admin',
	templateUrl: './orcamentoEdit.component.html'
	//styleUrls: ['./app.component.css']
})

export class OrcamentoEditComponent extends GenericComponent implements OnInit {		

	elem: Orcamento = new Orcamento(null,null,null,null,null,null,null,null,null,null,null,null,null);

	constructor(private helper: Helper, private elemService: OrcamentoService, private route: ActivatedRoute, fb: FormBuilder) {
		super(fb);
		this.compModule = this.environment.module_orcamento;
		helper.setPageInfo('Orçamento', this.environment.module_orcamento);

	}

	ngOnInit(): void {
		this.route.params.forEach(
			(params : Params) => {
				this.id = params["id"];
			});
		
		this.elemService.getElem(this.id).then(elem => {
			this.elem = elem;
			this.helper.stopLoading();			
		});				
	}

	submitForm():void{		
		
	}		
}



