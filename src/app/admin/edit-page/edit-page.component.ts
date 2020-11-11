import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from './../../shared/tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Task } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.tasksService.getById(params['id']);
        })
      )
      .subscribe((task: Task) => {
        this.form = new FormGroup({
          title: new FormControl(task.title, Validators.required),
          text: new FormControl(task.text, Validators.required),
        });
      });
  }

  submit() {}
}
