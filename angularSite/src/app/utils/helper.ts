import { Injectable } 	from "@angular/core";
import { Router } 		from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Location } 	from '@angular/common';

declare var $: any;

@Injectable()
export class Helper {

	public pageTitle: string;
	public activeMenu: string;
	private passSalt: string = "BoogPassSalt";

	constructor(private router: Router, private location: Location, private slimLoadingBarService: SlimLoadingBarService) {
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

	setPageInfo(pt: string, am: string) {
		this.pageTitle = pt;		
		this.activeMenu = am;
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