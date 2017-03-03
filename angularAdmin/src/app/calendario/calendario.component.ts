import { Component, OnInit } from '@angular/core';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

declare var $: any;

@Component({
	selector: 'app-admin',
	templateUrl: './calendario.component.html'
	//styleUrls: ['./app.component.css']
})

export class CalendarioComponent extends GenericComponent implements OnInit {
	excluir: number;
	id : number;
	
	constructor(private helper: Helper) {
		super(null);
		helper.setPageInfo('Calendário', this.environment.module_calendario);
	}		

	ngOnInit(): void {		
		$('#calendar').fullCalendar({
			height: 600,
			fixedWeekCount : false,
			defaultDate: '2016-09-12',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			customButtons: {
				myCustomButton: {
					text: 'custom!',
					click: function() {
						alert('clicked the custom button!');
					}
				}
			},
			header: {
				left: 'prev,next today myCustomButton',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			}			
		});	
	}

	onSubmit(): void {
		console.log('adicionando...');		
	}

	loadCalendario() {
		console.log('iniciando...');
	}

	onRemove(elem) {
	}

}



