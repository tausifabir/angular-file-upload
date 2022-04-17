import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-my-add-todo-component',
  templateUrl: './my-add-todo-component.component.html',
  styleUrls: ['./my-add-todo-component.component.css']
})
export class MyAddTodoComponentComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title!:String;
  desc!:String;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const todo = {
        sno:1,
        title:this.title,
        description:this.desc,
        isActive:true
    }
    // using event emit as class output to add todo object
    this.todoAdd.emit(todo);
    console.log("todo added");
  }



}
