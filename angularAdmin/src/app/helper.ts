import {Injectable} from "angular2/core";

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

}