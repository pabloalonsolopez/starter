import { Injectable } from "@angular/core"
import { RequestOptions, Headers, Http, Response } from "@angular/http"

import { Observable } from "rxjs/Observable"

import { Todo } from "./todo.model"

@Injectable()
export class TodosService {
  
  private todosUrl = "api/todos"
  private options = new RequestOptions({ headers: new Headers({ "Content-Type": "application/json" }) })

  constructor(private http: Http) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.todosUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }
  
  getTodo(id: string): Observable<Todo> {
    return this.http.get(`${this.todosUrl}${id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post(this.todosUrl, JSON.stringify(todo), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put(`${this.todosUrl}${todo._id}`, JSON.stringify(todo), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete(`${this.todosUrl}${todo._id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(response: Response): Observable<any> {
    return response.json() || {}
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error)
  }
  
}