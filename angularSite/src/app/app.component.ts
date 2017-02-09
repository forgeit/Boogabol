import { Component, OnInit } from '@angular/core';
import { Helper }    from './utils/helper';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	constructor(private helper: Helper) {		
	}

	ngOnInit(): void {		
	}

	title = 'app works!';
}
