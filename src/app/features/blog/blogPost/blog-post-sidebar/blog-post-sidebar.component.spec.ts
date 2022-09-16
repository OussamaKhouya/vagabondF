import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSidebarComponent } from './blog-post-sidebar.component';

describe('BlogPostSidebarComponent', () => {
  let component: BlogPostSidebarComponent;
  let fixture: ComponentFixture<BlogPostSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
