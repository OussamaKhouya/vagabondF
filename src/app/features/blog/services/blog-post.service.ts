import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from 'src/app/core/models/blog-post';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private blogEndpoint = environment.baseApiUrl;

  private baseUrl = `${this.blogEndpoint}/blogPosts`;

  getBlogPost(theBlogPostId: number): Observable<BlogPost> {
    const blogPostUrl = `${this.baseUrl}/${theBlogPostId}`;
    return this.httpClient.get<BlogPost>(blogPostUrl);
  }

  constructor(private httpClient: HttpClient) {}

  getblogPostListPaginate(
    thePage: number,
    thePageSize: number
  ): Observable<GetResponseBlogPosts> {
    const url = `${this.baseUrl}?page=${thePage}&size=${thePageSize}`;
    console.log(url);

    return this.httpClient.get<GetResponseBlogPosts>(url);
  }
}
