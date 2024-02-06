import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service.service';
import { Product } from '../../../interfaces/product';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{
    
    constructor(private productService:ProductService){}

    productList:Array<Product> = []

    defaultImage = "./src/assets/img/default.jpg"

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.productService.getProducts().subscribe(
            (res)=>this.productList=res
        );
        this.productList.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
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
                (complete)=>this.loadList()
            );
        }
    }
}
