import { Task } from './../../interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() task: Task;
  constructor() {}

  ngOnInit(): void {}
}
