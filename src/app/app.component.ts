import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts: any;
  title = 'pracangfour';

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    });
  }
}
