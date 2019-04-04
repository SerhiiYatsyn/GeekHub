import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToDoService} from '../../services/to-do.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Output() someChanges = new EventEmitter();
  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
  }

  perform(index) {
    this.todoService.switchComplete(index);
    if (this.todoService.Tasks[index].complete) {
      this.todoService.DoneCount++;
      this.todoService.UnDoneCount--;

    } else {
      this.todoService.DoneCount--;
      this.todoService.UnDoneCount++;
    }
  }

  editTask(index) {
    this.todoService.EditMode = true;
    const titleOfEditingTask = this.todoService.Tasks[index].title;
    this.someChanges.emit({1: 'editMode', 2: index, 3: titleOfEditingTask});
  }

  deleteTask(index) {
    this.todoService.deleteTask(index);
    if (this.todoService.Tasks[index].complete) {
      this.todoService.DoneCount--;
    } else {
      this.todoService.UnDoneCount--;
    }
    this.todoService.TasksCount--;
  }

  filterByOwner(t) {
    this.someChanges.emit({1: 'filterByOwner', 2: t});
  }

}
