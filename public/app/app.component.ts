import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from './task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formTask :FormGroup;
  title = 'task';
  TodoList;
  constructor( private formBuilder: FormBuilder,private TaskService:TaskService


  ){
    this.formTask  = formBuilder.group({
      'name':'',
    });
  }
  onSubmit(){

    if( Array.isArray(this.TodoList) == true)
    {
      this.TodoList.push(this.formTask.value.name);

    }else{
      this.TodoList = new Array();
      this.TodoList.push(this.formTask.value.name);
    }
    this.formTask.setValue({
      name:"",
    });


  }
  sauvegarde()
  {
    this.TaskService.TaskPost(this.TodoList ).subscribe(
        data => {

          this.TodoList = new Array();
          alert('ok');
        },
        error=> {
          alert('no save');


        }
    );
  }

  deletetdo(i)
  {
    this.TodoList.splice(i, 1);

  }
}
