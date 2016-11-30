import { Action } from '@ngrx/store'

import { TodoActions } from "../actions/todo.actions"
import { Todo } from "../todo.model"

export const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case TodoActions.GET_TODOS_SUCCESS: {
      return action.payload
    }
    case TodoActions.CREATE_TODO_SUCCESS: {
      return [...state, action.payload]
    }
    case TodoActions.UPDATE_TODO_SUCCESS: {
      return state.map(todo => {
        return todo._id === action.payload._id ? Object.assign({}, todo, action.payload) : todo
      })
    }
    case TodoActions.DELETE_TODO_SUCCESS: {
      return state.filter(todo => {
        return todo._id !== action.payload._id;
      })
    }
    default:
      return state
  }
}