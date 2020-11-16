import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TasksService } from './../shared/tasks.service';
import { Task } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
})
export class TaskPageComponent implements OnInit {
  task$: Observable<Task>;
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.task$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.tasksService.getById(params['id']);
      })
    );
  }
}
