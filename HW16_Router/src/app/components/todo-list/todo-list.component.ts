import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoService} from '../../services/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Output() someChanges = new EventEmitter();
  selected = 'all';
  titleOfEditingTask: string;
  TmpIndx: string;

  constructor(public todoService: ToDoService) {
  }

  ngOnInit() {
  }

  updates(eventParam) {
    switch (eventParam[1]) {
      case 'editMode':
        this.titleOfEditingTask = eventParam[3];
        this.TmpIndx = eventParam[2];
        break;
      case 'editDone':
        this.someChanges.emit(eventParam);
        console.log(eventParam);
        break;
      case 'delete':
        this.someChanges.emit(eventParam);
        break;
      case 'filterByOwner':
        this.selected = 'owner';
        this.filterAll(eventParam[2]);
    }
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
        break;
    }
    if (selected !== 'all' && selected !== 'done' && selected !== 'undone' && selected !== 'archived') {
      this.todoService.Tasks.forEach(t => {
        console.log(selected);
        if (selected !== t.owner) {
          t.hide = true;
        }
      });
    }
  }

  confirmEditTask() {
    this.todoService.Tasks[this.TmpIndx].title = this.titleOfEditingTask;
    this.todoService.EditMode = false;
    this.titleOfEditingTask = '';
  }
}
