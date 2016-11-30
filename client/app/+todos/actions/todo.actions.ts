import { Injectable } from '@angular/core'

import { Action } from '@ngrx/store'

import { Todo } from '../todo.model'

@Injectable()
export class TodoActions {
    
    static GET_TODOS = '[Todo] Get Todos'
    getTodos(): Action {
        return {
            type: TodoActions.GET_TODOS
        }
    }

    static GET_TODOS_SUCCESS = '[Todo] Get Todos Success'
    getTodosSuccess(todos: Todo[]): Action {
        return {
            type: TodoActions.GET_TODOS_SUCCESS,
            payload: todos
        }
    }

    static GET_TODO = '[Todo] Get Todo'
    getTodo(id: string): Action {
        return {
            type: TodoActions.GET_TODO,
            payload: id
        }
    }

    static GET_TODO_SUCCESS = '[Todo] Get Todo Success'
    getTodoSuccess(todo: Todo): Action {
        return {
            type: TodoActions.GET_TODO_SUCCESS,
            payload: todo
        }
    }

    static CREATE_TODO = '[Todo] Create Todo'
    createTodo(todo: Todo): Action {
        return {
            type: TodoActions.CREATE_TODO,
            payload: todo
        }
    }

    static CREATE_TODO_SUCCESS = '[Todo] Create Todo Success'
    createTodoSuccess(todo: Todo): Action {
        return {
            type: TodoActions.CREATE_TODO_SUCCESS,
            payload: todo
        }
    }

    static UPDATE_TODO = '[Todo] Update Todo'
    updateTodo(todo: Todo): Action {
        return {
            type: TodoActions.UPDATE_TODO,
            payload: todo
        }
    }

    static UPDATE_TODO_SUCCESS = '[Todo] Update Todo Success'
    updateTodoSuccess(todo: Todo): Action {
        return {
            type: TodoActions.UPDATE_TODO_SUCCESS,
            payload: todo
        }
    }

    static DELETE_TODO = '[Todo] Delete Todo'
    deleteTodo(todo: Todo): Action {
        return {
            type: TodoActions.DELETE_TODO,
            payload: todo
        }
    }

    static DELETE_TODO_SUCCESS = '[Todo] Delete Todo Success'
    deleteTodoSuccess(todo: Todo): Action {
        return {
            type: TodoActions.DELETE_TODO_SUCCESS,
            payload: todo
        }
    }
}