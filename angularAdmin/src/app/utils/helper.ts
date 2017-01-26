import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

declare var $: any;

@Injectable()
export class Helper {

	constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
		this.toastyConfig.theme = 'default';
	}

	updateTable(tableClass: string): void {
		setTimeout(() => {
			$('.'+tableClass).DataTable({
				"paging": true,
				"lengthChange": false,
				"searching": false,
				"ordering": true,
				"info": true,
				"autoWidth": false
			});	
		});
	}

	checkResponse(response: any): Promise<boolean> {		
		if (response.message) {
			this.showMessage(response.res, response.message);
		}
		if (response.res == environment.RET_OK) {
			return Promise.resolve(true);	
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
}