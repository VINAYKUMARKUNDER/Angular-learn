import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.css'],
})
export class MyTodoComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'title1',
        desc: 'desc1',
        active: false,
      },
      {
        id: 2,
        title: 'title2',
        desc: 'desc2',
        active: true,
      },
      {
        id: 3,
        title: 'title3',
        desc: 'desc3',
        active: false,
      },
      {
        id: 4,
        title: 'title4',
        desc: 'desc4',
        active: false,
      },
    ];
  }

  ngOnInit(): void {
    console.log(this.todos);
  }
}
