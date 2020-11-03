import { environment } from './../../environments/environment';
import { FbCreateResponse, Task } from './interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs/internal/util/pipe';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}
  create(task: Task): Observable<Task> {
    return this.http.post(`${environment.fbDbUrl}tasks.json`, task).pipe(
      map((response: FbCreateResponse) => {
        return { ...task, id: response.name, date: new Date(task.date) };
      })
    );
  }
}
