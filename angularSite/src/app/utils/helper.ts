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
	public menuSelected: string = null;
	public urlFile: string = environment.serverUrl + environment.urlFileView;
	public urlFilePath: string = environment.urlFilePath;

	public modalTitle: string = '';
	public modalText: string = '';
	public modalImg: string = '';
	public modalHide: boolean = true;
	public modalInfo: boolean = false;
	public modalLeft: boolean = false;
	public modalRight: boolean = false;
	public modalItem: number;
	public modalTotal: number;
	public modalClaz: string;

	private flagLoadJs: boolean = false;

	private passSalt: string = "BoogPassSalt";

	constructor(private router: Router, private location: Location) {
	}

	loadJS() {		
		setTimeout(() => {			
			this.createNodeScript(this.urlFilePath+'assets/js/confetti.min.js');
			this.createNodeScript(this.urlFilePath+'assets/js/main.js');
			this.flagLoadJs = true;	
		}, 1000);		
	}	

	loadJmask() {
		setTimeout(() => {
			var interval = setInterval(() => {
				if(document.readyState === 'complete') {
					clearInterval(interval);
					this.createNodeScript(this.urlFilePath+'assets/js/jquery.mask.min.js');
				}    
			}, 500);											
		}, 2000);
	}

	updateMask(): void {
		setTimeout(() => {
			var interval = setInterval(() => {
				if(document.readyState === 'complete') {
					clearInterval(interval);
					$('.data-mask').mask('00/00/0000', {clearIfNotMatch: true});
					$('.cpf-mask').mask('000.000.000-00', {clearIfNotMatch: true});
					$('.phone-mask').mask('(00) 0 0000-0000', {clearIfNotMatch: true});
				}  
			});  			
		}, 4000);
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
		//console.log(this.flagLoadJs);
		let interval = setInterval(() => {
			if (this.flagLoadJs) {
				clearInterval(interval);				
				var interval2 = setInterval(function() {
					if(document.readyState === 'complete') {
						clearInterval(interval2);
						$('.ct-preloader').fadeOut();
					}    
				}, 2000);
			}
		}, 200);
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

	getCurrentUrl(): string {
		return this.router.url;
	}

	public showModal(title: string, text: string, img: string) {
		this.modalLeft = false;
		this.modalRight = false;
		this.modalInfo = false;				
		this.modalTitle = title;
		this.modalText = text;
		this.modalImg = img;
		let h = $(window).height();
		$('.modal-bg').css('padding-top', (h<600?0:h/2-300)+"px");	
		$('.modal-bg').fadeIn(100);				
	}

	public showModal2(title: string, text: string, img: string, mItem: number, mTotal:number, mClaz: string) {
		if (mItem !== null && mTotal !== null) {
			this.modalLeft = true;
			this.modalRight = true;
			this.modalItem = mItem;
			this.modalTotal = mTotal;
			this.modalClaz = mClaz;
		}
		this.modalInfo = false;				
		this.modalTitle = title;
		this.modalText = text;
		this.modalImg = img;
		let h = $(window).height();
		$('.modal-bg').css('padding-top', (h<600?0:h/2-300)+"px");	
		$('.modal-bg').fadeIn(100);			
	}

	public infoModal() {
		this.modalInfo = !this.modalInfo;	
	}

	public sideModal(left: boolean) {
		let nextItem = this.modalItem;
		if (left) {
			if (nextItem == 0) {
				nextItem = this.modalTotal;
			} else {
				nextItem--;
			}
		} else {
			if (nextItem == this.modalTotal) {
				nextItem = 0;
			} else {
				nextItem++;
			}
		}
		$('.'+this.modalClaz+'-'+nextItem).click();
	}

	public hideModal() {		
		this.modalImg = '';
		$('.modal-bg').fadeOut(100);		
	}

	scrollTo() {
		setTimeout(() => {
			$('html, body').animate({
				scrollTop: $("#parceiroList").offset().top
			}, 2000);
		}, 2000);
	}	

	pageInfo(title: string, menuSelected: string) {
		this.pageTitle = title;
		this.menuSelected = menuSelected;
	}

	createNodeScript(src: string) {
		let node = document.createElement('script');
		node.src = src;
		node.type = 'text/javascript';
		node.async = false;
		node.charset = 'utf-8';
		document.getElementsByTagName('head')[0].appendChild(node);	
	}

}