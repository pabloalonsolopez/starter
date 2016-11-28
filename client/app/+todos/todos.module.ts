import { NgModule } from "@angular/core"

import { SharedModule } from "../shared/shared.module"

import { RoutingModule } from "./todos.routing"

import { TodosComponent } from "./todos.component"

import { TodosService } from "./todos.service"

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [
    TodosComponent
  ],
  providers: [
    TodosService
  ]
})

export class TodosModule { }