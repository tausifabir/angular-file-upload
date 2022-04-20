import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTodoComponentComponent } from './my-todo-component/my-todo-component.component';
import { MyTodoItemDetailsComponent } from './my-todo-item-details/my-todo-item-details.component';
import { MyAddTodoComponentComponent } from './my-add-todo-component/my-add-todo-component.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MyTodoComponentComponent,
    MyTodoItemDetailsComponent,
    MyAddTodoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
