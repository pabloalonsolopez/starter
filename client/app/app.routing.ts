import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "todos",
    loadChildren: "./+todos/todos.module#TodosModule"
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)