import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyAppComponent } from './lazy-app.component';
import { LazyApp2Component } from './lazy-app2/lazy-app2.component';
import { LazyApp3Component } from './lazy-app3/lazy-app3.component';


const routes: Routes = [
  {path:'',redirectTo:'lazy-app2',pathMatch:'full'},
  // {path:'lazy-app1',component:LazyAppComponent },
  {path:'lazy-app2',component:LazyApp2Component } ,
  {path:'lazy-app3',component:LazyApp3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyAppRoutingModule { }
