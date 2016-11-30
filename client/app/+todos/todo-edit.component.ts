import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Router } from '@angular/router'

import { Todo } from "./todo.model"
import { TodosService } from "./todos.service"

@Component({
  selector: "st-todo-edit",
  templateUrl: "./todo-edit.component.html"
})

export class TodoEditComponent {
  
  @Input() todo: Todo
  @Output() onEdit: EventEmitter<Todo> = new EventEmitter<Todo>()
  error: any
  
  constructor(private router: Router, private todosService: TodosService) { }

  updateTodo(todo: Todo): void {
    this.todo = todo
    this.todosService.updateTodo(this.todo)
  	  .subscribe(
        () => this.onEdit.emit(this.todo),
        error => this.error = error
  	  )
  }

}