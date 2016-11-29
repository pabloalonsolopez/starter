import { NgModule } from "@angular/core"

import { SharedModule } from "../shared/shared.module"

import { RoutingModule } from "./todos.routing"

import { TodosComponent } from "./todos.component"
import { TodosListComponent } from "./todos-list.component"
import { TodoNewComponent } from "./todo-new.component"
import { TodoDetailComponent } from "./todo-detail.component"
import { TodoFormComponent } from "./todo-form.component"

import { TodosService } from "./todos.service"

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    TodosComponent,
    TodosListComponent,
    TodoNewComponent,
    TodoDetailComponent,
    TodoFormComponent
  ],
  providers: [
    TodosService
  ]
})

export class TodosModule { }