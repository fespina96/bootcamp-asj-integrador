import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service.service';
import { Product } from '../../../interfaces/product';
import { ProductFilterOptions } from '../../../interfaces/product-filter-options';
import { ToastService } from '../../../services/toast.service';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{
    
    constructor(private productService:ProductService, private toastService:ToastService){}

    productList:Array<Product> = []

    activeMode=true;

    filteringMode=false;

    defaultImage = "/assets/img/default.jpg";

    activeFilters:ProductFilterOptions = {
        name:"",
        desc:"",
        category:""
    }

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.productService.getProducts().subscribe(
            {
                next:(data)=>{this.productList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
        this.activeMode=true;
    }

    loadDeletedList(){
        this.productService.getDeletedProducts().subscribe(
            {
                next:(data)=>{this.productList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
        this.activeMode=false;
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el producto?`)){
            this.productService.deleteProduct(id).subscribe(
                {
                    next:(data)=>{console.log(data)},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{this.toastService.show("Producto eliminado.",{ classname: 'bg-success', delay: 10000 })}
                }
            );
        }
    }

    undoDeleteListItem(id:any){
        if(confirm(`Esta seguro que desea restablecer el producto?`)){
            this.productService.undoDeleteProduct(id).subscribe(
                {
                    next:(data)=>{console.log(data)},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{this.toastService.show("Producto restablecido.",{ classname: 'bg-success', delay: 10000 });this.loadDeletedList()}
                }
            );
        }
    }

    toggleFilter(){
        this.filteringMode=!this.filteringMode;
    }

    filterList(){
        if(this.activeMode){
            this.productService.getFilteredProducts(this.activeFilters).subscribe(
                {
                    next:(data)=>{this.productList=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
            )
        }else{
            this.productService.getFilteredDeletedProducts(this.activeFilters).subscribe(
                {
                    next:(data)=>{this.productList=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
            )
        }
    }

    sortList(input:any){
        if(input=='asc'){
            this.productList = this.productList.sort((a:Product,b:Product)=>a.price - b.price);
        }else if(input=='desc'){
            this.productList = this.productList.sort((a:Product,b:Product)=>b.price - a.price);
        }
        
    }
}
