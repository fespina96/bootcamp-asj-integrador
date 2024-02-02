import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SideNavComponent } from './components/template/side-nav/side-nav.component';
import { SideNavContentComponent } from './components/template/side-nav-content/side-nav-content.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/template/error-404/error-404.component';
import { ListProductsComponent } from './components/lists/list-products/list-products.component';
import { FormProductsComponent } from './components/forms/form-products/form-products.component';
import { ListOrdersComponent } from './components/lists/list-orders/list-orders.component';
import { ListSuppliersComponent } from './components/lists/list-suppliers/list-suppliers.component';
import { FormOrdenesComponent } from './components/forms/form-ordenes/form-ordenes.component';
import { FormSuppliersComponent } from './components/forms/form-suppliers/form-suppliers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ProductViewComponent } from './components/views/product-view/product-view.component';
import { SupplierViewComponent } from './components/views/supplier-view/supplier-view.component';
import { OrderViewComponent } from './components/views/order-view/order-view.component';
import { FormCategoryComponent } from './components/forms/form-category/form-category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product-service.service';
import { ProductCategoryService } from './services/product-category.service';
import { SupplierService } from './services/supplier.service';
import { OrderService } from './services/order-service.service';
import { CountriesService } from './services/countries.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ProductPipe } from './pipes/product.pipe';
registerLocaleData(localeEs,'es');

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
        FormProductsComponent,
        ListOrdersComponent,
        ListSuppliersComponent,
        FormOrdenesComponent,
        FormSuppliersComponent,
        LoginComponent,
        ProductViewComponent,
        SupplierViewComponent,
        OrderViewComponent,
        FormCategoryComponent,
        ProductPipe
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        ProductService,
        ProductCategoryService,
        SupplierService,
        OrderService,
        CountriesService,
        {provide:LOCALE_ID,useValue:'es'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
