import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product-service.service';
import { Product } from '../../../interfaces/product';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
    constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router){}

    productDetail:Product = {
        id:undefined,
        skuCode:"",
        supplier:{id:undefined,name:""},
        productCategory:{id:undefined,name:""},
        name:"",
        description:"",
        price:undefined,
        imageUrl:"",
        createdAt:undefined,
        updatedAt:undefined,
        deletedAt:undefined
    }

    ngOnInit(): void {
        this.loadProduct();
    }

    loadProduct(){
        this.productService.getProductById(this.route.snapshot.paramMap.get("id")).subscribe(
            (res)=>this.productDetail=res
        );
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el producto?`)){
            this.productService.deleteProduct(id);
            this.router.navigateByUrl("/productos");
        }
    }
}
