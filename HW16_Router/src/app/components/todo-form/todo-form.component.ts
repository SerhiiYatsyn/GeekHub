import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../modules/Task';
import {ToDoService} from '../../services/to-do.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Input() titleOfTask: string;
  @Input() owner: string;
  @Input() tempTaskIndex: number;
  @Output() someChanges = new EventEmitter();


  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
  }

  addTask() {
    this.someChanges.emit({1: 'addTask'});
    this.todoService.addTask(this.titleOfTask, this.owner);
  }

  confirmEditTask(index) {
    this.todoService.Tasks[index].title = this.todoService.titleOfEditingTask;
  }
}
