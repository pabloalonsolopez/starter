import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

import { Todo } from './todo.model'
import { TodosService } from './todos.service'

@Component({
  selector: 'st-todo-form',
  templateUrl: 'todo-form.component.html'
})

export class TodoFormComponent implements OnInit {
  
  todoForm: FormGroup
  todo: Todo
  error: any
  formErrors: any = {
    'name': ''
  }
  validationMessages: any = {
    'name': {
      'required': 'Name is required.'
    }
  }
  
  constructor(private formBuilder: FormBuilder, private router: Router, private todosService: TodosService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.todoForm = this.formBuilder.group({
      'name': ['']
    })
    this.todoForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    )
  }

  submit(): void {
    this.todosService.createTodo(this.todoForm.value)
  	  .subscribe(
        todo => this.router.navigate(['/todos', todo._id]),
        error => this.error = error
  	  )
  }

  onValueChanged(data?: any): void {
    if (!this.todoForm) { return }
    for (const field in this.formErrors) {
      this.formErrors[field] = ''
      const control = this.todoForm.get(field)
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field]
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' '
        }
      }
    }
  }

}