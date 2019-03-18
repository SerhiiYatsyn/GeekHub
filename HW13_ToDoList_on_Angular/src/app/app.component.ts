import { Component } from '@angular/core';
import { Task } from './Task';
import { NgModel} from '@angular/forms';
import { Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {toASCII} from 'punycode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ToDoOnAngular';
  selected = 'all';
  tempTask: Task;
  title: string;
  isEdit = false;
  UndoneTasks = 0;
  DoneTasks = 0;
  titleoftask: string;
  Tasks: Task[] = [];


  addTask() {
  this.Tasks.unshift({
    id: this.Tasks.length,
    title: this.titleoftask,
    complete: false,
    hide: false
  });
  console.log(this.Tasks);
  this.UndoneTasks++;
  }
  deleteTask(task) {
    if(this.Tasks.filter(t => t.id === task.id)[0].complete)
      this.DoneTasks--;
    else  this.UndoneTasks--;

    this.Tasks = this.Tasks.filter(t => t.id !== task.id);

  }
  perform(task: Task) {
    // complete task
    console.log(task);
    task.complete = !task.complete;
    // update counters
        if(task.complete) {
          this.DoneTasks++;
          this.UndoneTasks--;
        }else{
          this.DoneTasks--;
          this.UndoneTasks++;
        }


  }
  confirmEditTask(task: Task) {
    task.title = this.titleoftask;
    this.isEdit = false;
    console.log(task.title);
  }
  editTask(task: Task) {
    this.isEdit = true;
    this.titleoftask = this.Tasks.filter(t => t.id === task.id)[0].title;
    this.tempTask = task;
  }
  filterAll(selected) {
    for (let i = 0; i < this.Tasks.length; i++) {
      this.Tasks[i].hide = false;
    }
    switch (selected) {

      case 'all': break;
      case 'done':
        //
        // this.Tasks = this.Tasks.filter(t => t.complete === true, ); break;
        for (let i = 0; i < this.Tasks.length; i++) {
         if(this.Tasks[i].complete === false) {  this.Tasks[i].hide = true; console.log(this.Tasks[i]);}
        }
        // this.Tasks.map(t => {if (!t.complete) { t.hide = true; } });
        break;
         // this.Tasks.filter(t => t.complete === true).forEach(t => t.hide === false)
      case 'undone':
        // this.allTasks = this.Tasks;
        // this.Tasks = this.Tasks.filter(t => t.complete === false); break;
        for (let i = 0; i < this.Tasks.length; i++) {
          if(this.Tasks[i].complete === true) {  this.Tasks[i].hide = true; console.log(this.Tasks[i]);}
        }  break;
    }
  }
  // Trackby
  identify(index) {
    return index;
  }

}
