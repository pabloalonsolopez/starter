import { Action } from '@ngrx/store'

import { TodoActions } from "../actions/todo.actions"
import { Todo } from "../todo.model"

export const selectedTodoReducer = (state: Todo = null, action: Action): Todo => {
  switch (action.type) {
    case TodoActions.GET_TODO_SUCCESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}