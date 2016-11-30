import { Injectable } from '@angular/core'

import { Effect, Actions } from '@ngrx/effects'

import { TodoActions } from "../actions/todo.actions"
import { TodosService } from "../todos.service"
import { Todo } from "../todo.model"

@Injectable()
export class TodoEffects {
    
  constructor(private actions$: Actions, private todoActions: TodoActions, private todosService: TodosService) { }

  @Effect() getTodos$ = this.actions$
    .ofType(TodoActions.GET_TODOS)
    .mergeMap(() => this.todosService.getTodos())
    .map((todos: Todo[]) => this.todoActions.getTodosSuccess(todos))
  
  @Effect() getTodo$ = this.actions$
    .ofType(TodoActions.GET_TODO)
    .map(action => action.payload)
    .switchMap((id: string) => this.todosService.getTodo(id))
    .map((todo: Todo) => this.todoActions.getTodoSuccess(todo))

  @Effect() createTodo$ = this.actions$
    .ofType(TodoActions.CREATE_TODO)
    .map(action => action.payload)
    .switchMap((todo: Todo) => this.todosService.createTodo(todo))
    .map((todo: Todo) => this.todoActions.createTodoSuccess(todo))
  
  @Effect() updateTodo$ = this.actions$
    .ofType(TodoActions.UPDATE_TODO)
    .map(action => action.payload)
    .switchMap((todo: Todo) => this.todosService.updateTodo(todo))
    .map((todo: Todo) => this.todoActions.updateTodoSuccess(todo))

  @Effect() deleteTodo$ = this.actions$
    .ofType(TodoActions.DELETE_TODO)
    .map(action => action.payload)
    .switchMap((todo: Todo) => this.todosService.deleteTodo(todo))
    .map((todo: Todo) => this.todoActions.deleteTodoSuccess(todo))

}