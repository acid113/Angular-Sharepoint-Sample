import { Component, OnInit } from "@angular/core";
import { Announcement } from "./../../models/announcement";

import { SharepointService } from "./../../shared/services/sharepoint.service";

@Component({
	selector: "app-announcement",
	templateUrl: "./announcement.component.html",
	styleUrls: ["./announcement.component.css"]
})
export class AnnouncementComponent implements OnInit {
	constructor(private service: SharepointService) {}

	public Announcements: Announcement[];

	ngOnInit() {}

	public GetAnnouncement() {
		this.service.GetAnnouncement("DemoAnnouncement").subscribe(response => {
			this.Announcements = response;
			console.log(this.Announcements);
		});
	}

	public RemoveAnnouncement() {
		this.Announcements.pop();
	}

	// * Reference: https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5
	public TrackBy(index: number, item: Announcement): number {
		return item.Id;
	}
}
