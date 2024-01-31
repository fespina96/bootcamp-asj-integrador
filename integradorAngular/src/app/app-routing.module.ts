import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error-404/error-404.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { FormProductosComponent } from './components/form-products/form-products.component';
import { ListSuppliersComponent } from './components/list-suppliers/list-suppliers.component';
import { FormSuppliersComponent } from './components/form-suppliers/form-suppliers.component';
import { ListOrdenesComponent } from './components/list-ordenes/list-ordenes.component';
import { FormOrdenesComponent } from './components/form-ordenes/form-ordenes.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SupplierViewComponent } from './components/supplier-view/supplier-view.component';
import { OrderViewComponent } from './components/order-view/order-view.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'productos' , component: ListProductsComponent},
    { path: 'producto/:id' , component: ProductViewComponent},
    { path: 'form-productos' , component: FormProductosComponent},
    { path: 'form-productos/:editId' , component: FormProductosComponent},
    { path: 'proveedores' , component: ListSuppliersComponent},
    { path: 'proveedor/:id' , component: SupplierViewComponent},
    { path: 'form-proveedores' , component: FormSuppliersComponent},
    { path: 'form-proveedores/:editId' , component: FormSuppliersComponent},
    { path: 'ordenes' , component: ListOrdenesComponent},
    { path: 'orden/:id' , component: OrderViewComponent},
    { path: 'form-ordenes' , component: FormOrdenesComponent},
    { path: 'form-ordenes/:editId' , component: FormOrdenesComponent},

    { path: '**' , component: Error404Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
