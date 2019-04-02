import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Output() someChanges = new EventEmitter();

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
  }
  perform(index) {
    this.todoService.switchComplete(index);
    if (this.todoService.Tasks[index].complete) {
      this.someChanges.emit({1: 'perform', 2: 'complete'});
    } else {
      this.someChanges.emit({1: 'perform', 2: 'uncomplete'});
    }
  }

  editTask(index) {
    const titleOfTask = this.todoService.Tasks[index].title;
    this.someChanges.emit({1: 'editMode', 2: titleOfTask, 3: index});
  }

  deleteTask(index) {
    this.todoService.deleteTask(index);
    let buff;
    if (this.todoService.Tasks[index].complete) {
      buff = 'done';
    } else {
      buff = 'undone';
    }
    this.someChanges.emit({1: 'delete', 2: buff});

  }

  filterByOwner(t) {
    this.someChanges.emit({1: 'filterByOwner', 2: t });
  }

}
