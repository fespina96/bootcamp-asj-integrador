import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service.service';
import { Product } from '../../../interfaces/product';
import { FilterOptions } from '../../../interfaces/filter-options';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{
    
    constructor(private productService:ProductService){}

    productList:Array<Product> = []

    activeMode=true;

    filteringMode=false;

    defaultImage = "/assets/img/default.jpg";

    activeFilters:FilterOptions = {
        name:"",
        desc:"",
        category:""
    }

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.productService.getProducts().subscribe(
            (res)=>this.productList=res
        );
        this.activeMode=true;
    }

    loadDeletedList(){
        this.productService.getDeletedProducts().subscribe(
            (res)=>this.productList=res
        );
        this.activeMode=false;
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el producto?`)){
            this.productService.deleteProduct(id).subscribe(
                (res)=>console.log(res),
                (complete)=>this.loadList()
            );
        }
    }

    undoDeleteListItem(id:any){
        if(confirm(`Esta seguro que desea restablecer el producto?`)){
            this.productService.undoDeleteProduct(id).subscribe(
                (res)=>console.log(res),
                (complete)=>this.loadDeletedList()
            );
        }
    }

    toggleFilter(){
        this.filteringMode=!this.filteringMode;
    }

    filterList(){
        this.productService.getFilteredProducts(this.activeFilters).subscribe(
            (res)=>this.productList=res
        )
    }
}
