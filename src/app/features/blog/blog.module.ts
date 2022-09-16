import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPostDetailsComponent } from './blogPost/blog-post-details/blog-post-details.component';
import { BlogPostListComponent } from './blogPost/blog-post-list/blog-post-list.component';
import { BlogPostSidebarComponent } from './blogPost/blog-post-sidebar/blog-post-sidebar.component';

@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogPostDetailsComponent,
    BlogPostListComponent,
    BlogPostSidebarComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
