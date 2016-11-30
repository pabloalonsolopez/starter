import { Component, OnInit } from "@angular/core"

import { Observable } from "rxjs/Observable"
import { Store } from "@ngrx/store"

import { Todo } from "./todo.model"
import { TodosService } from "./todos.service"
import { TodoActions } from "./actions/todo.actions"

@Component({
  selector: "st-todos-list",
  templateUrl: "./todos-list.component.html"
})

export class TodosListComponent implements OnInit {

  todos: Observable<Todo[]>
  error: any

  constructor(private store: Store<any>, private todoActions: TodoActions, private todosService: TodosService) {
    this.todos = store.select('todos')
  }

  ngOnInit(): void {
    this.store.dispatch(this.todoActions.getTodos())
  }

}