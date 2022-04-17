import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-my-todo-item-details',
  templateUrl: './my-todo-item-details.component.html',
  styleUrls: ['./my-todo-item-details.component.css']
})
export class MyTodoItemDetailsComponent implements OnInit {

  @Input() todo!:Todo
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo):void {
    this.todoDelete.emit(todo);
    console.log("delete button is clicked");
  }

}
