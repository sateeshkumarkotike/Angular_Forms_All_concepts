import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyAppRoutingModule } from './lazy-app-routing.module';
import { LazyAppComponent } from './lazy-app.component';
import { LazyApp2Component } from './lazy-app2/lazy-app2.component';
import { LazyApp3Component } from './lazy-app3/lazy-app3.component';



@NgModule({
  declarations: [LazyAppComponent, LazyApp2Component, LazyApp3Component],
  imports: [
    CommonModule,
    LazyAppRoutingModule
  ]
})
export class LazyAppModule { }
