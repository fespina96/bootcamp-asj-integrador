import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrl: './list-productos.component.css'
})
export class ListProductosComponent implements OnInit{
    
    constructor(private productService:ProductService){}

    productList:Array<Producto> = []

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.productList = this.productService.getProductos();
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el producto codigo ${id}?`)){
            this.productService.deleteProducto(id);
            this.loadList();
        }
    }
}
