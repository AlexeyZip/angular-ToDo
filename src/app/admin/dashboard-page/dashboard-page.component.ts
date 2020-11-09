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
  dSub: Subscription;
  searchStr = '';
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tSub = this.tasksService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  remove(id: string) {
    this.dSub = this.tasksService.remove(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }

  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}
