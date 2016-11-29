import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { TodosComponent } from "./todos.component"
import { TodosListComponent } from "./todos-list.component"
import { TodoNewComponent } from "./todo-new.component"
import { TodoDetailComponent } from "./todo-detail.component"

const routes: Routes = [
  {
    path: "",
    component: TodosComponent,
    children: [
      {
        path: "",
        component: TodosListComponent
      },
      {
        path: "new",
        component: TodoNewComponent
      },
      {
        path: ":id",
        component: TodoDetailComponent
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)