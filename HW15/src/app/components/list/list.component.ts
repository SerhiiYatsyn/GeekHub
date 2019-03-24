import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoService} from '../../services/to-do.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() someChanges = new EventEmitter();

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
    }
  }
}
