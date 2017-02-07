import { Component, OnInit } 	from '@angular/core';
import { Router } 		from '@angular/router';

import { environment } 	from '../../environments/environment';
import { Helper }		from '../utils/helper';


@Component({
	selector: 'app-admin',
	templateUrl: './atracao.component.html'
	//styleUrls: ['./app.component.css']
})
export class AtracaoComponent implements OnInit {
	environment:any = environment;

	constructor(private helper: Helper) {
		//helper.setPageInfo('Dashboard');
	}

	ngOnInit(): void {
		console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = '../assets/js/confetti.min.js';
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
	}
	
	title = 'app works!';
}
