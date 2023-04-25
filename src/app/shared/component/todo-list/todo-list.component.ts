import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../services/todoservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItems:Array<string>=[]
  constructor(private _todoService:TodoserviceService) { }

  ngOnInit(): void {
    console.log(this._todoService.getAlltodos())
    this.todoItems=this._todoService.getAlltodos()
  }

}
