import { Task } from 'src/app/shared/interfaces';
import { environment } from './../../environments/environment';
import { FbCreateResponse } from './interfaces';
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

  getAll(): Observable<Task[]> {
    return this.http.get(`${environment.fbDbUrl}/tasks.json`).pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map((key) => ({
          ...response[key],
          id: key,
          date: new Date(response[key].date),
        }));
      })
    );
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${environment.fbDbUrl}/tasks/${id}.json`).pipe(
      map((task: Task) => {
        return { ...task, id, date: new Date(task.date) };
      })
    );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/tasks/${id}.json`);
  }

  update(task: Task): Observable<Task> {
    return this.http.patch<Task>(
      `${environment.fbDbUrl}/task/${task.id}.json`,
      task
    );
  }
}
