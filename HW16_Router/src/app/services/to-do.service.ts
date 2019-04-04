import {Injectable} from '@angular/core';
import {Task} from '../modules/Task';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  Tasks: Task[] = [];
  DoneCount = 0;
  UnDoneCount = 0;
  EditMode = false;
  TasksCount = 0;
  titleOfEditingTask: string;

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
    this.UnDoneCount++;
    this.TasksCount++;

  }

  deleteTask(index) {
    if (this.Tasks[index].complete) {
      this.DoneCount--;
    } else {
      this.UnDoneCount--;
    }
    this.TasksCount--;
    this.Tasks[index].deleted = true;

  }

  switchComplete(index) {
    this.Tasks[index].complete = !this.Tasks[index].complete;
  }
}
