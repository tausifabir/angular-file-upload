import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project';

  constructor(){

    //setTimeout is a builtin node method
    setTimeout(()=>{
      this.title = "My Todo List";
    },2000);

  }
}
