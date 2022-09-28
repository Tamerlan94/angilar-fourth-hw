import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from 'src/models/placeholderModel';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  id: number = 0;

  constructor(private route: ActivatedRoute, private placeholderService: PlaceholderService) {
    this.id = Number(this.route.parent?.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.placeholderService.getUserTodos(this.id).subscribe(todos => this.todos = todos);
  }
}
