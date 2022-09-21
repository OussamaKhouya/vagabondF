import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/core/models/blog-post';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.scss'],
})
export class BlogPostDetailsComponent implements OnInit {
  blogPost: BlogPost = new BlogPost();

  constructor(
    private blogPostService: BlogPostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getBlogPostDetails();
    });
  }

  private getBlogPostDetails() {
    // get the "id" param string. convert string to a number using the "+" symbol
    // @ts-ignore
    const theBlogPostId: number = +this.route.snapshot.paramMap.get('id');

    this.blogPostService.getBlogPost(theBlogPostId).subscribe((data) => {
      this.blogPost = data;
    });
  }
}
