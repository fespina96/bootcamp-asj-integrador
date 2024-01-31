import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error-404/error-404.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { ListOrdenesComponent } from './components/list-ordenes/list-ordenes.component';
import { ListSuppliersComponent } from './components/list-suppliers/list-suppliers.component';
import { FormOrdenesComponent } from './components/form-ordenes/form-ordenes.component';
import { FormSuppliersComponent } from './components/form-suppliers/form-suppliers.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SupplierViewComponent } from './components/supplier-view/supplier-view.component';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SideNavComponent,
        SideNavContentComponent,
        FooterComponent,
        HomeComponent,
        Error404Component,
        ListProductsComponent,
        FormProductosComponent,
        ListOrdenesComponent,
        ListSuppliersComponent,
        FormOrdenesComponent,
        FormSuppliersComponent,
        LoginComponent,
        ProductViewComponent,
        SupplierViewComponent,
        OrderViewComponent,
        FormCategoryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
