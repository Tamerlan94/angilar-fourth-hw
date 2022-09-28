import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/placeholderModel';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts: Post[] = [];

  constructor(private placeholderService: PlaceholderService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.placeholderService.getPosts().subscribe(posts => this.posts = posts);
  }

}
