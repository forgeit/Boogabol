import { Injectable } 	from "@angular/core";
import { Router } 		from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

import { environment } 	from '../../environments/environment';
import { Location } 	from '@angular/common';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

declare var $: any;
declare var sha256: any;

@Injectable()
export class Helper {

	public orcamentoNaoLido: number;
	public pageTitle: string;
	public activeMenu: string;
	private passSalt: string = "BoogPassSalt";
	private height: number = 0;

	constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig, private router: Router, private location: Location, private slimLoadingBarService: SlimLoadingBarService) {
		this.toastyConfig.theme = 'default';		
	}

	updateTable(tableClass: string, ordenable: boolean, searchable: boolean): void {
		if ($.fn.dataTable.isDataTable( '.'+tableClass )) {
			$('#example').DataTable( {
				"destroy": true,
				"paging": true,
				"lengthChange": false,
				"searching": searchable,
				"ordering": ordenable,
				"info": true,
				"autoWidth": false
			});
		} else {
			setTimeout(() => {
				$('.'+tableClass).DataTable({
					"paging": true,
					"lengthChange": false,
					"searching": searchable,
					"ordering": ordenable,
					"info": true,
					"autoWidth": false
				});	
			});
		}
		
	}

	checkResponse(response: any): Promise<boolean> {	
		this.stopLoading();
		if (response.message) {
			this.showMessage(response.res, response.message);
		}
		if (response.res == environment.RET_OK) {
			return Promise.resolve(true);	
		} else if(response.res == environment.RET_LOGIN) {
			this.navigate('login/out', null);
			return Promise.resolve(false);	
		} else {
			return Promise.resolve(false);	
		}
	}

	showMessage(type: string, text: string): void {
		var toastOptions:ToastOptions = {
			title: "Sucesso",
			msg: text,
			showClose: true,
			timeout: 5000,
			theme: 'default'				
		};
		if (type == environment.RET_OK) {
			toastOptions.title = "Sucesso";
			this.toastyService.success(toastOptions);
		} else {
			toastOptions.title = "Ooops!";
			this.toastyService.error(toastOptions);
		}
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

	cryptPassword(pass): string {
		return sha256(this.passSalt+pass);
	}

	startLoading() {
		let h = $(window).height();
		if (this.height !== h) {
			$('.div-loading-window').css('margin-top', h / 2 - 150 + "px");
			this.height = h;
		}
		$('.div-loading').fadeIn();
		this.slimLoadingBarService.start();
	}

	stopLoading() {
		setTimeout(() => {
			$('.div-loading').fadeOut();				
			this.slimLoadingBarService.complete();
		}, 1000);
	}


}