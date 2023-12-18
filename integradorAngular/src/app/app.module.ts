import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error-404/error-404.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    SideNavContentComponent,
    FooterComponent,
    HomeComponent,
    Error404Component,
    ListProductosComponent,
    FormProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
