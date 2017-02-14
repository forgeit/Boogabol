import { Injectable } 	from "@angular/core";
import { Router } 		from '@angular/router';

import { environment } 	from '../../environments/environment';
import { Location } 	from '@angular/common';

declare var $: any;

@Injectable()
export class Helper {

	environment:any = environment;
	
	public hideLoading: boolean = false;
	public pageTitle: string = null;
	public urlFile: string = environment.serverUrl + environment.urlFileView;
	public urlFilePath: string = environment.urlFilePath;

	public modalTitle: string = '';
	public modalText: string = '';
	public modalHide: boolean = true;

	private flagLoadJs: boolean = false;

	private passSalt: string = "BoogPassSalt";

	constructor(private router: Router, private location: Location) {
	}

	loadJS() {		
		setTimeout(() => {
			//console.log('preparing to load JS...');
			let node = document.createElement('script');
			node.src = this.urlFilePath+'assets/js/confetti.min.js';
			node.type = 'text/javascript';
			node.async = false;
			node.charset = 'utf-8';
			document.getElementsByTagName('main')[0].appendChild(node);
			setTimeout(() => {
				if (this.isLoadedJs) {			
					let node2 = document.createElement('script');
					node2.src = this.urlFilePath+'assets/js/main.js';
					node2.type = 'text/javascript';
					node2.async = false;
					node2.charset = 'utf-8';
					document.getElementsByTagName('main')[0].appendChild(node2);
				}	
				this.flagLoadJs = true;		
			}, 2000);
		}, 1000);		
	}	

	loadJmask() {
		setTimeout(() => {
			//console.log('preparing to load JS...');
			let node = document.createElement('script');
			node.src = this.urlFilePath+'assets/js/jquery.mask.min.js';
			node.type = 'text/javascript';
			node.async = true;
			node.charset = 'utf-8';
			document.getElementsByTagName('head')[0].appendChild(node);		
		}, 2000);
	}

	isLoadedJs() {
		return this.flagLoadJs;
	}

	timeOutStopLoading() {
	}
	timeOutStopLoadingOLD() {
		let interval = setInterval(() => {
			if (this.flagLoadJs) {
				this.stopSpinnerLoader();
				clearInterval(interval);
			}			
		}, 2000);		
	}

	startSpinnerLoader() {	
		if (this.flagLoadJs) {
			$('#loading').append('<div class="ct-preloader"><div class="ct-preloader__inner"><div class="ct-preloader__spinner"><i class="ct-preloader__1"></i><i class="ct-preloader__2"></i><i class="ct-preloader__3"></i><i class="ct-preloader__4"></i><i class="ct-preloader__5"></i><i class="ct-preloader__6"></i><i class="ct-preloader__7"></i><i class="ct-preloader__8"></i></div></div></div>');
		}
		var interval = setInterval(function() {
			if(document.readyState === 'complete') {
				clearInterval(interval);
				$('.ct-preloader').fadeOut();
			}    
		}, 2000);
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
		}, 4000);
	}

	getCurrentUrl(): string {
		return this.router.url;
	}

	public showModal(title: string, text: string) {
		this.modalTitle = title;
		this.modalText = text;
		this.modalHide = false;
	}

	public hideModal() {
		this.modalHide = true;
	}

	scrollTo() {
		setTimeout(() => {
			$('html, body').animate({
				scrollTop: $("#parceiroList").offset().top
			}, 2000);
		}, 2000);
	}
}