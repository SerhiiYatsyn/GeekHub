import {Component, OnInit} from '@angular/core';
import {ToDoService} from '../../services/to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  titleOfTask: string;
  tempTaskIndex: number;
  owner: string;

  constructor(public todoService: ToDoService) {
  }

  ngOnInit(): void {
  }

}
