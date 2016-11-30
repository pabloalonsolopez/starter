import { NgModule } from "@angular/core"

import { SharedModule } from "../shared/shared.module"

import { RoutingModule } from "./todos.routing"

import { Store, StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { TodoActions } from "./actions/todo.actions"
import { TodoEffects } from "./effects/todo.effects"
import { todosReducer } from "./reducers/todos.reducer"
import { selectedTodoReducer } from "./reducers/selected-todo.reducer"

import { TodosComponent } from "./todos.component"
import { TodosListComponent } from "./todos-list.component"
import { TodoNewComponent } from "./todo-new.component"
import { TodoDetailComponent } from "./todo-detail.component"
import { TodoEditComponent } from "./todo-edit.component"
import { TodoFormComponent } from "./todo-form.component"

import { TodosService } from "./todos.service"

@NgModule({
  imports: [
    SharedModule,
    RoutingModule,
    StoreModule.provideStore({todos: todosReducer, selectedTodo: selectedTodoReducer}),
    EffectsModule.run(TodoEffects)
  ],
  declarations: [
    TodosComponent,
    TodosListComponent,
    TodoNewComponent,
    TodoDetailComponent,
    TodoEditComponent,
    TodoFormComponent
  ],
  providers: [
    TodosService,
    TodoActions
  ]
})

export class TodosModule { }