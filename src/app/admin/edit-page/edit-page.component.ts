import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from './../../shared/tasks.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Task } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { AlertService } from '../shared/components/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  task: Task;
  submitted: boolean = false;

  uSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private alert: AlertService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.tasksService.getById(params['id']);
        })
      )
      .subscribe((task: Task) => {
        this.task = task;
        this.form = new FormGroup({
          title: new FormControl(task.title, Validators.required),
          text: new FormControl(task.text, Validators.required),
        });
      });
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    this.uSub = this.tasksService
      .update({
        ...this.task,
        text: this.form.value.text,
        title: this.form.value.title,
      })
      .subscribe(() => {
        this.submitted = false;
        this.alert.success('Post was be update');
      });
  }
}
