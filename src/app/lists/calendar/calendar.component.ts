import { Component, OnInit } from "@angular/core";

import { SharepointService } from "./../../shared/services/sharepoint.service";
import { ICalendarEvent } from "./../../models/iCalendarEvent";
import { formatDate } from "@angular/common";
import * as moment from "moment";

@Component({
	selector: "app-calendar",
	templateUrl: "./calendar.component.html",
	styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
	public CalendarEvents: ICalendarEvent[];
	constructor(private service: SharepointService) {}

	ngOnInit() {}

	public GetCalendarEvents() {
		this.service.GetCalendarEvents("DemoCalendar").subscribe(response => {
			// console.log("inside CalendarComponent.GetCalendarEvents()");
			this.CalendarEvents = response;
			// console.log(this.CalendarEvents[2]);
			// console.log(this.CalendarEvents[2]);
			console.log(`Description: ${this.CalendarEvents[3].Description}`);

			const rawDate = this.CalendarEvents[3].Created.toString();
			console.log(`Raw JSON Date: ${rawDate}`);

			// tslint:disable-next-line: radix
			const formattedDate = new Date(parseInt(rawDate.substr(6)));
			// const formattedDate = new Date(parseInt(rawDate.replace("/Date(", "").replace(")/", ""), 10));
			console.log(`Raw Date Object: ${formattedDate}`);

			// const newDate = new Date(formattedDate);
			console.log(`Not converted: ${formattedDate.toDateString()} ${formattedDate.toString()}`);
			// console.log(`To Local: ${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()} ${newDate.getTimezoneOffset()}`);
			console.log(`UTC: ${formattedDate.toUTCString()}`);

			const momentDate = moment(rawDate);
			// console.log(`Is UTC? : ${momentDate.isUtc()}`);
			console.log(`moment utc: ${momentDate.utc()}`);
			// console.log(`moment `)

			// const format = "dd/MM/yyyy";
			// const myDate = new Date
			// const locale = "en-US";
			// const formattedDate = formatDate(myDate, format, locale);
			// console.log(formattedDate);
		});
	}
}
