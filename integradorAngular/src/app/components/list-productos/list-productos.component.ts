import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrl: './list-productos.component.css'
})
export class ListProductosComponent implements OnInit{
    
    constructor(private productService:ProductService){}

    productList:Array<Product> = []

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.productList = this.productService.getProductos();
        this.productList.sort(function(a, b) {
            var textA = a.name_prod.toUpperCase();
            var textB = b.name_prod.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el producto codigo ${id}?`)){
            this.productService.deleteProducto(id);
            this.loadList();
        }
    }
}
