import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { TodosComponent } from "./todos.component"

const routes: Routes = [
  {
    path: "",
    component: TodosComponent
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)