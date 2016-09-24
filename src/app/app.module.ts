import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HolaAngularComponent } from './hola-angular/hola-angular.component';
import { AversijalaComponent } from './aversijala/aversijala.component';
import { ElqueyocreeComponent } from './elqueyocree/elqueyocree.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ShopComponent } from './shop/shop.component';
import { APP_ROUTES } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HolaAngularComponent,
    AversijalaComponent,
    ElqueyocreeComponent,
    AlumnosComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
