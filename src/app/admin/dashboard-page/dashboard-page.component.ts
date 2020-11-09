import { Task } from './../../shared/interfaces';
import { TasksService } from './../../shared/tasks.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  tSub: Subscription;
  searchStr = '';
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tSub = this.tasksService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  remove(id: string) {}

  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
  }
}
