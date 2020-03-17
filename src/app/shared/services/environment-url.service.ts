import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class EnvironmentUrlService {
	public urlAddress: string = environment.url;
	constructor() {}
}
