import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../services/todoservice.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private _todoServie:TodoserviceService) { }

  ngOnInit(): void {
  }
  onToDoAdd(item:HTMLInputElement){
    let val=item.value;
    console.log(val);
    if(val.length>0){
      this._todoServie.addToDoItem(val)
    }
    item.value='';
  }
}
