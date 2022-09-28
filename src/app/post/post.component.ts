import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/models/placeholderModel';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private subscription: Subscription;
  id: number = 0;
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private placeholderService: PlaceholderService) {
    this.subscription = route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.placeholderService.getPostById(this.id).subscribe(post => this.post = post);
  }

}
