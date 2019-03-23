import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
