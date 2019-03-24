import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../modules/Task';
import {ToDoService} from '../../services/to-do.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() titleOfTask: string;
  @Input() tempTaskIndex: number;
  @Input() Tasks: Task[];
  @Input() EditMode: boolean;
  @Output() someChanges = new EventEmitter();


  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
  }

  addTask() {
    this.someChanges.emit({1: 'addTask'});
    this.todoService.addTask(this.titleOfTask);
  }

  confirmEditTask(index) {
    this.todoService.Tasks[index].title = this.titleOfTask;
    this.someChanges.emit({1: 'editDone'});
  }

}
