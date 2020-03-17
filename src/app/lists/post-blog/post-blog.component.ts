import { Component, OnInit } from "@angular/core";
import { Blog } from "./../../models/blog";

import { SharepointService } from "./../../shared/services/sharepoint.service";

@Component({
	selector: "app-post-blog",
	templateUrl: "./post-blog.component.html",
	styleUrls: ["./post-blog.component.css"]
})
export class PostBlogComponent implements OnInit {
	constructor(private service: SharepointService) {}

	public PostBlogs: Blog[];
	public PostBlog: Blog;

	ngOnInit() {}

	public GetPostBlogs() {
		this.service.GetPostBlogs().subscribe(response => {
			this.PostBlogs = response;
			console.log(this.PostBlogs);
		});
	}

	public GetPostBlog(id: number) {
		this.service.GetPostBlog(id).subscribe(response => {
			this.PostBlog = response;
			console.log(this.PostBlog);
		});
	}
}
