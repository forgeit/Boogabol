import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } 					from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } 					from 'angular-calendar';
import { Subject } from 'rxjs/Subject';

import { GenericComponent }  from '../utils/generic.component';
import { Helper } 			 from '../utils/helper';

import { Calendario } 		 from './calendario';
import { CalendarioService } from './calendario.service';

const colors: any = {
	red: {
		primary: '#ad2121',
		secondary: '#FAE3E3'
	},
	blue: {
		primary: '#1e90ff',
		secondary: '#D1E8FF'
	},
	yellow: {
		primary: '#e3bc08',
		secondary: '#FDF1BA'
	}
};

@Component({
	selector: 'app-admin',
	templateUrl: './calendario.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./calendario.css']
})

export class CalendarioComponent extends GenericComponent implements OnInit {

	@ViewChild('modalContent') modalContent: TemplateRef<any>;
	view: string = 'month';
	viewDate: Date = new Date();

	modalHidden = true;
	modalTitle: string;

	events: CalendarEvent[] = [];
	event: CalendarEvent;
	calendario: Calendario = new Calendario(null, null, "#DD0000", "#00DD00", null, null);	
	locale: string = 'pt-br';
	
	constructor(private helper: Helper, private elemService: CalendarioService) {
		super(null);
		helper.setPageInfo('Calendário', this.environment.module_calendario);
	}		

	ngOnInit(): void {	
		this.helper.updateMask();		
		this.loadList();
	}

	loadList() {
		this.elemService.getList().then(res => {
			this.helper.checkResponse(res).then((valid) => {
				if (valid) {
					this.calendariosToEvent(res.dataRes);			
				}
			})
		});		
	}

	addEvent(): void {
		this.calendario = new Calendario(null, null, "#DD0000", "#00DD00", null, null);
		this.showModal("Novo Registro");
	}

	editEvent(c: CalendarEvent): void {
		this.event = c;
		this.calendario = this.eventToCalendario(c);
		this.showModal("Edição Registro");
	}

	removeEvent(): void {
		this.elemService.remove(this.calendario.id).then(res => {
			this.helper.checkResponse(res).then(valid => {
				if (valid) {
					this.events = this.events.filter(iEvent => iEvent !== this.event);
					this.activeDayIsOpen = false;
					this.modalHidden = true;
				}
			});
		});				
	}

	saveEvent(): void {
		if (this.calendario.id == null) {
			this.elemService.insert(this.calendario).then(res => {
				this.helper.checkResponse(res).then(valid => {
					if (valid) {
						console.log(res.dataRes);
						this.events.push(this.calendarioToEvent(res.dataRes));
						this.refreshCalendar();
						this.modalHidden = true;
					}
				});
			});		
		} else {
			this.elemService.update(this.calendario).then(res => {
				this.helper.checkResponse(res).then(valid => {
					if (valid) {
						this.events = this.events.filter(iEvent => iEvent !== this.event);
						this.events.push(this.calendarioToEvent(res.dataRes));	
						this.refreshCalendar();
						this.modalHidden = true;
					}
				});
			});		
		}		
	}

	showModal(title: string): void {
		this.modalTitle = title;
		$('.modal-calendar').css('padding-top', $(window).height() / 2 - 180 + "px");			
		this.modalHidden = false;				
	}

	//----- CALENDAR
	refresh: Subject<any> = new Subject();	

	activeDayIsOpen: boolean = false;

	modalData: {
		action: string,
		event: CalendarEvent
	};

	actions: CalendarEventAction[] = [{
		label: '<i class="fa fa-fw fa-pencil"></i>',
		onClick: ({event}: {event: CalendarEvent}): void => {
			this.editEvent(event);
		}
	}];	

	dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {
		if (isSameMonth(date, this.viewDate)) {
			if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
				this.activeDayIsOpen = false;
			} else {
				this.activeDayIsOpen = true;
				this.viewDate = date;
			}
		}
	}

	eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
		event.start = newStart;
		event.end = newEnd;
		this.handleEvent('Dropped or resized', event);
	}

	handleEvent(action: string, event: CalendarEvent): void {
		this.modalData = {event, action};
		console.log(this.modalContent);
	}
	//-------------------

	calendariosToEvent(cals: Calendario[]) {
		if (cals !== null) {
			cals.forEach(c => {
				this.events.push(this.calendarioToEvent(c));
			});
		}
		this.refreshCalendar();
	}

	calendarioToEvent(cal: Calendario): CalendarEvent {
		let c: CalendarEvent = {		
			cssClass: ''+cal.id,	
			start: startOfDay(cal.data_ini),
			end: (cal.data_fim ? endOfDay(cal.data_fim) : null),
			title: cal.titulo,
			color: {primary: cal.cor_primaria, secondary: cal.cor_secundaria},
			actions: this.actions
		};
		return c;
	}

	eventToCalendario(c: CalendarEvent): Calendario {
		let cal: Calendario = new Calendario(
			Number(c.cssClass),
			c.title,
			c.color.primary,
			c.color.secondary,
			("0" + c.start.getDate()).slice(-2) + "/" + ("0"+(c.start.getMonth()+1)).slice(-2) + "/" + c.start.getFullYear(),			
			(c.end ? ("0" + c.end.getDate()).slice(-2) + "/" + ("0"+(c.end.getMonth()+1)).slice(-2) + "/" + c.end.getFullYear() : '')
			);
		return cal;
	}

	refreshCalendar() {
		setTimeout(() => {
			this.refresh.next();
		});
	}
}



