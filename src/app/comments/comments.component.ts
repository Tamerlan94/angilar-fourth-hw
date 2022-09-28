import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comment } from 'src/models/placeholderModel';
import { PlaceholderService } from '../placeholder.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  id: number = 0;

  constructor(private route: ActivatedRoute, private placeholderService: PlaceholderService) {
    this.id = Number(this.route.parent?.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.placeholderService.getPostComments(this.id).subscribe(comments => this.comments = comments);
  }

}
