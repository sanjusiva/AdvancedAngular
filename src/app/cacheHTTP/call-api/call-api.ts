import { Component } from '@angular/core';
import { PostService } from '../post-service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-call-api',
  imports: [CommonModule],
  templateUrl: './call-api.html',
  styleUrl: './call-api.css',
})
export class CallAPI {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  loadPosts() {
    this.postService.getPosts().subscribe(res => {
      console.log("res: ",res);
      
      this.posts = res as any[];
    });
  }
}
