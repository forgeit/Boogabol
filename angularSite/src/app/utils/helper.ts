import { Injectable } 	from "@angular/core";
import { Router } 		from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { environment } 	from '../../environments/environment';
import { Location } 	from '@angular/common';

declare var $: any;

@Injectable()
export class Helper {

	environment:any = environment;
	public hideLoading: boolean = false;
	public pageTitle: string = null;
	public urlFile: string = environment.serverUrl + environment.urlFileView;
	private flagLoadJs: boolean = false;

	private passSalt: string = "BoogPassSalt";

	constructor(private router: Router, private location: Location, private slimLoadingBarService: SlimLoadingBarService) {
	}

	loadJS() {
		//console.log('preparing to load JS...');
		let node = document.createElement('script');
		node.src = '../assets/js/confetti.min.js';
		node.type = 'text/javascript';
		node.async = true;
		node.charset = 'utf-8';
		document.getElementsByTagName('head')[0].appendChild(node);

		setTimeout(() => {
			//console.log('preparing to load JS 2...');
			let node2 = document.createElement('script');        
			node2.src = '../assets/js/main.js';
			node2.type = 'text/javascript';
			node2.async = true;
			node2.charset = 'utf-8';
			document.getElementsByTagName('head')[0].appendChild(node2);
		}, 1000);

		this.flagLoadJs = true;
	}

	isLoadedJs() {
		return this.flagLoadJs;
	}

	timeOutStopLoading() {
		setTimeout(() => {
			this.stopSpinnerLoader();
		}, 1000);
	}

	startSpinnerLoader() {		
		$('.ct-preloader').show();				
	}

	stopSpinnerLoader() {
		$('.ct-preloader').fadeOut();
	}

	navigate(url, id) {
		if (!url) {
			this.location.back();
		}
		if (!id) {
			this.router.navigate(['/'+url+'/']);
		} else {
			this.router.navigate(['/'+url+'/', id]);
		}
	}

	setPageInfo(pt: string) {
		this.pageTitle = pt;		
	}

	updateMaskDate(claz: string): void {
		setTimeout(() => {
			$('.'+claz).mask('00/00/0000');
		});
	}

	getCurrentUrl(): string {
		return this.router.url;
	}

	startLoading() {
		this.slimLoadingBarService.start();
	}

	stopLoading() {
		this.slimLoadingBarService.complete();
	}

}