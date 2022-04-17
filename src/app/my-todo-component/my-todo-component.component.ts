import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-my-todo-component',
  templateUrl: './my-todo-component.component.html',
  styleUrls: ['./my-todo-component.component.css']
})
export class MyTodoComponentComponent implements OnInit {

  todos!:Todo[];
  todos1!:Todo[];
  localItem!: any;
  constructor() {

    this.localItem= localStorage.getItem("todos")
  
    if(this.localItem==null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
   

    this.todos1 = [
      { sno:1,title:"Angular",description:"making Angular project",isActive:true},
      { sno:2,title:"Java",description:"making Java project",isActive:true},
      { sno:3,title:"Boostrap",description:"making Boostrap project",isActive:true},
      { sno:4,title:"Css",description:"using Css properties ",isActive:false},

    ];

   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo): void{
    console.log(todo);
    const index = this.todos.indexOf(todo);
    // delete method in typescript
    this.todos.splice(index,1);
    // after deleting todo object updated todo list into local storage
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  addTodo(todo:Todo): void{
    console.log(todo);
    this.todos.push(todo);
    // after creating new todo object  updated todo list into local storage
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }

}
