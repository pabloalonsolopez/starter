import { Component, OnInit } from "@angular/core"

import { Todo } from "./todo.model"
import { TodosService } from "./todos.service"

@Component({
  selector: "st-todos-list",
  templateUrl: "./todos-list.component.html"
})

export class TodosListComponent implements OnInit {

  todos: Todo[]
  error: any

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos()
      .subscribe(
        todos => this.todos = todos,
        error => this.error = error
      )
  }

}