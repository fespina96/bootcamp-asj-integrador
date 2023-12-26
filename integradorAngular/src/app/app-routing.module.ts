import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error-404/error-404.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { ListProveedoresComponent } from './components/list-proveedores/list-proveedores.component';
import { FormProveedoresComponent } from './components/form-proveedores/form-proveedores.component';
import { ListOrdenesComponent } from './components/list-ordenes/list-ordenes.component';
import { FormOrdenesComponent } from './components/form-ordenes/form-ordenes.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'productos' , component: ListProductosComponent},
    { path: 'form-productos' , component: FormProductosComponent},
    { path: 'form-productos/:editId' , component: FormProductosComponent},
    { path: 'proveedores' , component: ListProveedoresComponent},
    { path: 'form-proveedores' , component: FormProveedoresComponent},
    { path: 'form-proveedores/:editId' , component: FormProveedoresComponent},
    { path: 'ordenes' , component: ListOrdenesComponent},
    { path: 'form-ordenes' , component: FormOrdenesComponent},
    { path: 'form-ordenes/:editId' , component: FormOrdenesComponent},

    { path: '**' , component: Error404Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
