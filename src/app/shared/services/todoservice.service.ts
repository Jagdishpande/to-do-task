import { Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  todoList: Array<string>=["Html","css","Js","Bootstrap 3"]
  constructor(private _snackbarService:SnackBarService) { }

  getAlltodos():Array<string>{
    return this.todoList
  }

  addToDoItem(todo:string){
    this.todoList.push(todo)

    this._snackbarService.onOpenSnackbar(`${todo} is added in List`)
  }
}
