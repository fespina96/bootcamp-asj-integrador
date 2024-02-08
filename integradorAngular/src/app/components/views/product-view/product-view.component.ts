import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product-service.service';
import { Product } from '../../../interfaces/product';
import { ToastService } from '../../../services/toast.service';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
    constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router, private toastService:ToastService){}

    productDetail:Product = {
        id:undefined,
        skuCode:"",
        supplier:{id:undefined,name:""},
        productCategory:{id:undefined,name:""},
        name:"",
        description:"",
        price:0,
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
            {
                next:(data)=>{this.productDetail=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el producto?`)){
            this.productService.deleteProduct(id).subscribe(
                {
                    next:(data)=>{},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{
                        this.toastService.show("Producto borrado exitosamente.",{ classname: 'bg-success', delay: 10000 });
                        this.router.navigateByUrl("/productos");
                    }
                }
            );
            
        }
    }
}
