import {Injectable} from '@angular/core';
import {Task} from '../modules/Task';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  Tasks: Task[] = [];

  constructor() {
  }

  addTask(Title, Owner) {
    this.Tasks.unshift({
      id: this.Tasks.length,
      title: Title,
      owner: Owner,
      complete: false,
      hide: false,
      archived: false,
      deleted: false
    });
  }

  deleteTask(index) {
    this.Tasks[index].deleted = true;
  }

  archiveTask(index) {
    this.Tasks[index].archived = !this.Tasks[index].archived;
  }

  switchComplete(index) {
    this.Tasks[index].complete = !this.Tasks[index].complete;
  }


}
