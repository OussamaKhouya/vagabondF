import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/core/models/blog-post';
import { BlogPostService } from '../../services/blog-post.service';

interface GetResponseBlogPosts {
  _embedded: {
    blogPosts: BlogPost[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss'],
})
export class BlogPostListComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  blogPostsPage: BlogPost[] = [];
  // Properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 10;
  showSpinner = true;

  previousKeyword: string = '';

  constructor(
    private blogPostService: BlogPostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listBlogPost();
    });
  }

  listBlogPost() {
    let theKeyword = '';
    if (this.route.snapshot.paramMap.has('keyword')) {
      theKeyword = String(this.route.snapshot.paramMap.get('keyword'));
    }
    // if (this.previousKeyword != theKeyword) {
    //   this.blogPosts = [];
    //   // this.showMoreButton = true;
    // }
    this.previousKeyword = theKeyword;
    this.blogPostService.searchBlogPosts(theKeyword).subscribe((data) => {
      this.blogPosts = data;
      // spread new articles in blogPosts array
      // this.blogPosts = [...this.blogPosts, ...this.blogPostsPage];
      this.showSpinner = false;
    });
  }

  // showMore Button
  // showMoreButton = true;

  // showMore() {
  //   if (this.blogPosts.length !== this.theTotalElements) {
  //     this.thePageNumber++;
  //     this.listBlogPost();
  //   } else {
  //     this.showMoreButton = false;
  //   }
  // }
}
