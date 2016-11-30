import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

import { Todo } from './todo.model'

@Component({
  selector: 'st-todo-form',
  templateUrl: 'todo-form.component.html'
})

export class TodoFormComponent implements OnInit {
  
  @Input() todo: Todo
  @Output() onSubmit: EventEmitter<Todo> = new EventEmitter<Todo>()

  todoForm: FormGroup
  error: any
  formErrors: any = {
    'name': ''
  }
  validationMessages: any = {
    'name': {
      'required': 'Name is required.'
    }
  }
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.todoForm = this.formBuilder.group({
      'name': [this.todo.name]
    })
    this.todoForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
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