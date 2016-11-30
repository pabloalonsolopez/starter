import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router, Params } from '@angular/router'

import { Todo } from "./todo.model"
import { TodosService } from "./todos.service"

@Component({
  selector: "st-todo-detail",
  templateUrl: "./todo-detail.component.html"
})

export class TodoDetailComponent implements OnInit {

  todo: Todo
  error: any

  constructor(private route: ActivatedRoute, private router: Router, private todosService: TodosService) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id']
      this.todosService.getTodo(id)
        .subscribe(
          todo => this.todo = todo,
          error => this.error = error
        )
    })
  }

  delete(): void {
    this.todosService.deleteTodo(this.todo)
      .subscribe(
        () => this.router.navigate(['/todos']),
        error => this.error = error
      )
  }

  refresh(todo: Todo): void {
    this.todo = todo
  }
  
}