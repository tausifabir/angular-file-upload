import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyAddTodoComponentComponent} from "./my-add-todo-component/my-add-todo-component.component";

const routes: Routes = [
  { path: 'home', component:MyAddTodoComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
