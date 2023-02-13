import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { IosComponent } from './products/ios/ios.component';
import { AppleComponent } from './products/apple/apple.component';
import { SamsungComponent } from './products/samsung/samsung.component';
import { WebComponent } from './services/web/web.component';
import { MobileComponent } from './services/mobile/mobile.component';
import { WndowsComponent } from './services/wndows/wndows.component';
import { InputOutputComponent } from './home/input-output/input-output.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { FormArraysComponent } from './forms/form-arrays/form-arrays.component';
import { ZipValidatorDirective } from './forms/zip-validator.directive';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
    IosComponent,
    AppleComponent,
    SamsungComponent,
    WebComponent,
    MobileComponent,
    WndowsComponent,
    InputOutputComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    FormsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    FormArraysComponent,
    ZipValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
