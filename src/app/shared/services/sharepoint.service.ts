import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Department } from "../../models/department";
import { Candidate } from "../../models/candidate";
import { Announcement } from "./../../models/announcement";
import { Blog } from "./../../models/blog";
import { ICalendarEvent } from "../../models/iCalendarEvent";

import { EnvironmentUrlService } from "./environment-url.service";

@Injectable()
export class SharepointService {
	public Candidates: Candidate[];
	public Departments: Department[];
	public Announcements: Announcement[];
	public PostBlogs: Blog[];
	public CalendarEvents: ICalendarEvent[];

	constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) {}

	public GetDepartmentsUsingFetch(): Promise<Department[]> {
		// * Reference: https://stackoverflow.com/questions/53660262/angular-http-vs-fetch-api
		return fetch(`${this.envUrl.urlAddress}/Department`)
			.then(response => response.json()) // need conversion to JSON
			.then(data => {
				this.Departments = data.d.results as Department[];
				return this.Departments;
			});
	}

	public GetDepartmentsUsingHttp() {
		// return this.http.get<any>(`${this.envUrl.urlAddress}/Department`, this.generateHeaders());

		return this.http.get<any>(`${this.envUrl.urlAddress}/Department`).pipe(
			map(response => {
				this.Departments = response.d.results as Department[];
				return this.Departments;
			})
		);
	}

	public GetCandidates(): Observable<Candidate[]> {
		console.log("inside SharepointService.GetCandidates()");
		// console.log(`URL: ${this.envUrl.urlAddress}`);
		return this.http.get<any>(this.envUrl.urlAddress + "/Candidates", this.generateHeaders()).pipe(
			map(response => {
				// * data conversion in service level
				this.Candidates = response.d.results as Candidate[];
				// console.log("GetCandidates API call success!");
				// console.log(this.Candidates);
				return this.Candidates;
			})
		);
	}

	public GetCalendarEvents(calendarName: string): Observable<ICalendarEvent[]> {
		// console.log("inside SharepointService.GetCalendarEvents()");

		return this.http.get<any>(`${this.envUrl.urlAddress}/${calendarName}`).pipe(
			map(response => {
				this.CalendarEvents = response.d.results as ICalendarEvent[];
				// console.log("GetCalendarEvents API call success!");
				// console.log(this.CalendarEvents);
				return this.CalendarEvents;
			})
		);
	}

	public GetAnnouncement(announcementName: string) {
		return this.http.get<any>(`${this.envUrl.urlAddress}/${announcementName}`, this.generateHeaders()).pipe(
			map(response => {
				this.Announcements = response.d.results as Announcement[];
				// console.log(this.Announcements);
				return this.Announcements;
			})
		);
	}

	public GetPostBlogs(): Observable<Blog[]> {
		return this.http.get<any>(`${this.envUrl.urlAddress}/Posts`, this.generateHeaders()).pipe(
			map(response => {
				const postBlogs = response.d.results as Blog[];
				// console.log(postBlogs);
				return postBlogs;
			})
		);
	}

	public GetPostBlog(id: number): Observable<Blog> {
		return this.http.get<any>(`${this.envUrl.urlAddress}/Posts(${id})`, this.generateHeaders()).pipe(
			map(response => {
				const postBlog = response.d as Blog;
				// console.log(postBlog);
				return postBlog;
			})
		);
	}

	private generateHeaders() {
		return {
			headers: new HttpHeaders({
				Accept: "application/json;odata=verbose",
				"Content-Type": "application/json"
			})
		};
	}
}
