import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/models/placeholderModel';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private subscription: Subscription;
  id: number = 0;
  user: User | undefined;

  constructor(private route: ActivatedRoute, private placeholderService: PlaceholderService) {
    this.subscription = route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.placeholderService.getUserById(this.id).subscribe(user => this.user = user);
  }

}
