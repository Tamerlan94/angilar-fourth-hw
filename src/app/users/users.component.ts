import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/placeholderModel';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private placeholderService: PlaceholderService) { }

  ngOnInit(): void {
    this.placeholderService.getUsers().subscribe(users => this.users = users);
  }
}
