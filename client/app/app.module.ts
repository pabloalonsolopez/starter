import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { CoreModule } from "./core/core.module"

import { RoutingModule } from "./app.routing"

import { AppComponent } from "./app.component"

@NgModule({
  imports: [
  	BrowserModule,
    CoreModule,
    RoutingModule
  ],
  declarations: [
  	AppComponent
  ],
  bootstrap: [
  	AppComponent
  ]
})

export class AppModule { }