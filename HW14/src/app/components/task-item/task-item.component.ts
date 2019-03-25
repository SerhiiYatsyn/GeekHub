import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../modules/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() Tasks: Task[];
  @Output() someChanges = new EventEmitter();
  titleOfTask: string;

  constructor() {
  }

  ngOnInit() {
  }

  perform(task: Task) {
    task.complete = !task.complete;
    if (task.complete) {
      this.someChanges.emit({1: 'perform', 2: 'complete'});
    } else {
      this.someChanges.emit({1: 'perform', 2: 'uncomplete'});
    }
  }

  editTask(task: Task) {
    this.titleOfTask = this.Tasks.filter(t => t.id === task.id)[0].title;
    this.someChanges.emit({1: 'editMode', 2: this.titleOfTask, 3: task});
  }

  deleteTask(task) {
    task.deleted = true;
    let buff;
    if (this.Tasks.filter(t => t.id === task.id)[0].complete) {
      buff = 'done';
    } else {
      buff = 'undone';
    }
    this.someChanges.emit({1: 'delete', 2: buff});
  }
}
