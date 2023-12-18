import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error-404/error-404.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'productos' , component: ListProductosComponent},
    { path: 'form-productos' , component: FormProductosComponent},

    { path: '**' , component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
