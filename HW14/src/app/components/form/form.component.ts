import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../modules/Task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() titleOfTask: string;
  @Input() tempTask: Task;
  @Input() Tasks: Task[];
  @Input() EditMode: boolean;
  @Output() someChanges = new EventEmitter();

  addTask() {
    this.Tasks.unshift({
      id: this.Tasks.length,
      title: this.titleOfTask,
      complete: false,
      hide: false,
      archived: false,
      deleted: false
    });
    console.log(this.Tasks);
    // this.UnDoneTasks++;
    this.someChanges.emit({1: 'addTask', 2: this.Tasks});
  }

  confirmEditTask(task: Task) {
    task.title = this.titleOfTask;
    this.someChanges.emit({1: 'editDone'});
    console.log(task.title);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
