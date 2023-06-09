import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTodoComponent } from './component/my-todo/my-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTodoComponent,
    NavbarComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
