import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../modules/Task';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Output() someChanges = new EventEmitter();
  selected = 'all';

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
  }

  updates(eventParam) {
    switch (eventParam[1]) {
      case 'perform':
        this.someChanges.emit(eventParam);
        console.log(eventParam);
        break;
      case 'editMode':
        this.someChanges.emit(eventParam);
        break;
      case 'editDone':
        this.someChanges.emit(eventParam);
        console.log(eventParam);
        break;
      case 'delete':
        this.someChanges.emit(eventParam);
        break;
      case 'filterByOwner':
        this.someChanges.emit(eventParam);
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
    if(selected !== 'all' && selected !== 'done' && selected !== 'undone' && selected !==  'archived')
      this.todoService.Tasks.forEach(t => {
        console.log(selected);
        if (selected !== t.owner) {
          t.hide = true;
        }
      });
  }
}
