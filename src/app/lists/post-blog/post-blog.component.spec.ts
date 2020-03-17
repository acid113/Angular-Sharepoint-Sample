/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PostBlogComponent } from "./post-blog.component";

describe("PostBlogComponent", () => {
	let component: PostBlogComponent;
	let fixture: ComponentFixture<PostBlogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PostBlogComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PostBlogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
