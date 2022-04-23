import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';
import {Event} from "@angular/router";
import {FileUploadService} from "../Service/FileUploadService";

@Component({
  selector: 'app-my-add-todo-component',
  templateUrl: './my-add-todo-component.component.html',
  styleUrls: ['./my-add-todo-component.component.css']
})
export class MyAddTodoComponentComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title!:String;
  desc!:String;
  selectedFiles!: FileList;
  selectedPreviewFiles: string[] = [];
  uploadClicked: boolean = false;
  constructor(private fileUploadService: FileUploadService) { }

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

    this.fileUploadService.uploadImage(this.selectedFiles);

  }

  onFileChange(event:any){
    this.selectedFiles = event.target.files;
    //const reader = new FileReader();
    //this.selectedPreviewFiles = event.target.reuslt;
    //reader.readAsDataURL(event.target.files[0]);
    for (let i = 0; i < event.target.files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedPreviewFiles.push(reader.result as string);
      }
      // @ts-ignore
      reader.readAsDataURL((event.target as HTMLInputElement).files[i]);
    }
  }
  removeFile(i:number){
    const index = this.selectedPreviewFiles.indexOf(this.selectedPreviewFiles[i]);
    this.selectedPreviewFiles.splice(index, 1);
  }

  uploadFile(i:number,event:any){
    this.selectedPreviewFiles[i] = event.target.files[0];
  }



}
