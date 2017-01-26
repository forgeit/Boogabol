import {Injectable} from "@angular/core";
import { environment } from '../../environments/environment';

declare var $: any;

@Injectable()
export class Helper {

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

	checkResponse(response: any): boolean {
		if (response.res == environment.RET_OK) {
			return true;
		} else {
			alert('Erro');
			return false;
		}
	}

}