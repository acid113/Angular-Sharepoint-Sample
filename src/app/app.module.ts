import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CandidatesComponent } from "./lists/candidates/candidates.component";
import { CalendarComponent } from "./lists/calendar/calendar.component";
import { AnnouncementComponent } from "./lists/announcement/announcement.component";
import { PostBlogComponent } from "./lists/post-blog/post-blog.component";

import { SharepointService } from "./shared/services/sharepoint.service";
import { EnvironmentUrlService } from "./shared/services/environment-url.service";

@NgModule({
	declarations: [
		AppComponent,
		CandidatesComponent,
		CalendarComponent,
		AnnouncementComponent,
		PostBlogComponent],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [
		SharepointService,
		EnvironmentUrlService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
