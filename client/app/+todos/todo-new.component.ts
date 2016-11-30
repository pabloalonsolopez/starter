import { Component, OnInit } from "@angular/core"
import { Router } from '@angular/router'

import { Todo } from "./todo.model"
import { TodosService } from "./todos.service"

@Component({
  selector: "st-todo-new",
  templateUrl: "./todo-new.component.html"
})

export class TodoNewComponent {
  
  todo: Todo
  error: any
  
  constructor(private router: Router, private todosService: TodosService) { }

  ngOnInit(): void {
    this.todo = new Todo()
  }

  createTodo(todo: Todo): void {
    this.todo = todo
    this.todosService.createTodo(this.todo)
  	  .subscribe(
        todo => this.router.navigate(['/todos', todo._id]),
        error => this.error = error
  	  )
  }

}