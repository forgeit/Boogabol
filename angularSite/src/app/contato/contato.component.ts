import { Component } from '@angular/core';
import { Router } 			 from '@angular/router';

import { Helper }			 from '../utils/helper';

import { GenericService }	 from '../utils/generic.service';


@Component({
	selector: 'app-admin',
	templateUrl: './contato.component.html'
	//styleUrls: ['./app.component.css']
})
export class ContatoComponent {


	constructor(private helper: Helper, private gs: GenericService) {		
	}
	
}
