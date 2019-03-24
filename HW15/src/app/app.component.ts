import {Component} from '@angular/core';
import {Task} from './modules/Task';
import {ToDoService} from './services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Tasks: Task[] = [];
  EditMode = false;
  DoneCount = 0;
  UnDoneCount = 0;
  selected = 'all';
  titleOfTask: string;
  tempTaskIndex: number;

  constructor(private todoService: ToDoService) {
  }

  filterAll(selected) {
    this.todoService.Tasks.forEach(t => t.hide = false);
    switch (selected) {
      case 'all':
        break;
      case 'done':
        this.todoService.Tasks.forEach(t => {
          if (!t.complete) {
            t.hide = true;
          }
        });
        break;
      case 'undone':
        this.todoService.Tasks.forEach(t => {
          if (t.complete) {
            t.hide = true;
          }
        });
        break;
      case  'archived':
        this.todoService.Tasks.forEach((t => {
          if (!t.archived) {
            t.hide = true;
          }
        }));
    }
  }


  updates(eventParam) {
    switch (eventParam[1]) {
      case 'addTask':
        this.UnDoneCount++;
        break;
      case 'perform':
        if (eventParam[2] === 'complete') {
          this.DoneCount++;
          this.UnDoneCount--;
        } else if (eventParam[2] === 'uncomplete') {
          this.DoneCount--;
          this.UnDoneCount++;
        }
        break;
      case 'editMode':
        this.EditMode = true;
        this.titleOfTask = eventParam[2];
        this.tempTaskIndex = eventParam[3];
        break;
      case 'editDone':
        this.EditMode = false;
        this.titleOfTask = '';
        break;
      case 'delete':
        if (eventParam[2] === 'done') {
          this.DoneCount--;
        } else if (eventParam[2] === 'undone') {
          this.UnDoneCount--;
        }
        break;
    }
  }
}
