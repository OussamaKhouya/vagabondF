import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { BlogPost } from 'src/app/core/models/blog-post';
import { BlogPostService } from '../services/blog-post.service';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  blogPostsPage: BlogPost[] = [];
  //Properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 6;
  theTotalElements: number = 10;

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    // setTimeout(() => this.listBlogPost(), 5000);
    this.listBlogPost();
  }
  listBlogPost() {
    this.blogPostService
      .getblogPostListPaginate(this.thePageNumber - 1, this.thePageSize)
      .subscribe((data: GetResponseBlogPosts) => {
        this.blogPostsPage = data._embedded.blogPosts;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
        // spread new articles in blogPosts array
        this.blogPosts = [...this.blogPosts, ...this.blogPostsPage];
      });
  }

  // showMore Button
  showMoreButton = true;

  showMore() {
    if (this.blogPosts.length !== this.theTotalElements) {
      this.thePageNumber++;
      this.listBlogPost();
    } else {
      this.showMoreButton = false;
    }
  }
}

// showMore() {
//   console.log(this.thePageSize, this.theTotalElements);
//   if (this.thePageSize + 3 >= this.theTotalElements) {
//     this.thePageSize = this.theTotalElements;
//   } else {
//     this.thePageSize += 3;
//   }
//   this.listBlogPost();
//   if (this.thePageSize >= this.theTotalElements) {
//     this.showMoreButton = false;
//   }
// }
