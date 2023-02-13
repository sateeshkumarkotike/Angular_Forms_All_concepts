import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { AppleComponent } from './products/apple/apple.component';
import { SamsungComponent } from './products/samsung/samsung.component';
import { IosComponent } from './products/ios/ios.component';
import { MobileComponent } from './services/mobile/mobile.component';
import { WebComponent } from './services/web/web.component';
import { WndowsComponent } from './services/wndows/wndows.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { FormArraysComponent } from './forms/form-arrays/form-arrays.component';

const routes: Routes = [
  { path:"",redirectTo:"/home" ,pathMatch:"full"},
  { path:'home',component:HomeComponent },
  { path:'products',component:ProductsComponent ,children:[
    { path:'',redirectTo:'apple' ,pathMatch:'full' },
    { path:'apple',component:AppleComponent },
    { path:'samsung',component:SamsungComponent },
    { path:'ios',component:IosComponent },
    { path:'**',redirectTo:"apple",pathMatch:'full'} 
  ]},
  { path:'services',component:ServicesComponent ,children:[
    { path:'',redirectTo:'mobile',pathMatch:'full'},
    { path:'mobile' ,component:MobileComponent },
    { path:'web',component:WebComponent },
    { path:'windows',component:WndowsComponent },
    { path:'**' ,redirectTo:'mobile',pathMatch:'full' }
  ]},
  { path:'forms',component:FormsComponent,children:[
    {path:'',redirectTo:'template-driven-froms',pathMatch:'full'},
    { path:'template-driven-froms',component:TemplateDrivenFormsComponent },
    { path:'reactive-forms' ,component:ReactiveFormsComponent} ,
    { path:'form-arrays' ,component:FormArraysComponent }
  ] },
  { path:'contact',component:ContactComponent },
  { path:'about' ,component:AboutComponent },
  { path:'blog',component:BlogComponent },
  { path:'template',component:TemplateDrivenComponent },
  { path:'reactive',component:ReactiveComponent },
  { path:'lazy',loadChildren: './lazy-app/lazy-app.module#LazyAppModule'},
  { path:'**',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
