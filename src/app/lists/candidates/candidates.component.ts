import { Component, OnInit } from "@angular/core";
import { SharepointService } from "../../shared/services/sharepoint.service";

import { Candidate } from "../../models/candidate";
import { Department } from "../../models/department";

@Component({
	selector: "app-candidates",
	templateUrl: "./candidates.component.html",
	styleUrls: ["./candidates.component.css"]
})
export class CandidatesComponent implements OnInit {
	constructor(private service: SharepointService) {}

	public Departments: Department[];
	public Candidates: Candidate[];

	ngOnInit() {}

	public DisplayDepartmentsFetch() {
		this.service.GetDepartmentsUsingFetch().then(response => {
			console.log("inside CandidatesComponent.DisplayDepartmentsFetch()");
			this.Departments = response;
			console.log(this.Departments);
			console.log(this.Departments[0].Title);
		});
	}

	public DisplayDepartmentsHttp() {
		this.service.GetDepartmentsUsingHttp().subscribe(response => {
			console.log("inside CandidatesComponent.DisplayDepartmentsHttp()");

			// this.Departments = response.d.results;
			this.Departments = response;
			console.log(this.Departments);
			console.log(this.Departments[0].Title);
		});
	}

	public DisplayCandidates() {
		this.service.GetCandidates().subscribe(response => {
			console.log("inside CandidatesComponent.DisplayCandidates()");

			this.Candidates = response;
			console.log(this.Candidates);
			console.log(`${this.Candidates[0].FirstName} ${this.Candidates[0].LastName}`);
		});
	}
}
