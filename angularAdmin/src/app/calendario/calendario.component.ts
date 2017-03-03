import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } 					from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } 					from 'angular-calendar';
import { Subject } from 'rxjs/Subject';

import { GenericComponent } from '../utils/generic.component';
import { Helper } 			from '../utils/helper';

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
	modalHidden = false;
	
	constructor(private helper: Helper) {
		super(null);
		helper.setPageInfo('Calendário', this.environment.module_calendario);
	}		

	ngOnInit(): void {		
		
	}

	modalData: {
		action: string,
		event: CalendarEvent
	};

	actions: CalendarEventAction[] = [{
		label: '<i class="fa fa-fw fa-pencil"></i>',
		onClick: ({event}: {event: CalendarEvent}): void => {
			console.log(event);
			console.log('edit');
		}
	}, {
		label: '<i class="fa fa-fw fa-times"></i>',
		onClick: ({event}: {event: CalendarEvent}): void => {
			this.events = this.events.filter(iEvent => iEvent !== event);
			console.log(event);
			console.log('edit');
		}
	}];

	refresh: Subject<any> = new Subject();

	events: CalendarEvent[] = [{
		start: subDays(startOfDay(new Date()), 1),
		end: addDays(new Date(), 1),
		title: 'A 3 day event',
		color: colors.red,
		actions: this.actions
	}, {
		start: startOfDay(new Date()),
		title: 'An event with no end date',
		color: colors.yellow,
		actions: this.actions
	}, {
		start: subDays(endOfMonth(new Date()), 3),
		end: addDays(endOfMonth(new Date()), 3),
		title: 'A long event that spans 2 months',
		color: colors.blue
	}, {
		start: addHours(startOfDay(new Date()), 2),
		end: new Date(),
		title: 'A draggable and resizable event',
		color: colors.yellow,
		actions: this.actions,
		resizable: {
			beforeStart: true,
			afterEnd: true
		},
		draggable: true
	}];

	activeDayIsOpen: boolean = true;

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
		console.log('refresh');
	}

	handleEvent(action: string, event: CalendarEvent): void {
		this.modalData = {event, action};
		console.log(this.modalContent);
	}

	addEvent(): void {
		this.events.push({
			title: 'New event',
			start: startOfDay(new Date()),
			end: endOfDay(new Date()),
			color: colors.red,
			draggable: true,
			resizable: {
				beforeStart: true,
				afterEnd: true
			}
		});
		console.log('refresh');
	}


}



