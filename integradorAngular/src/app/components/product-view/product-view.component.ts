import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../interfaces/product';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
    constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router){}

    productDetail:Product = {
        cod_sku:"",
        prov_id:"",
        cat_id:"",
        name_prod:"",
        desc:"",
        price:"",
        img_url:""
    }

    ngOnInit(): void {
        this.cargarProducto();
    }

    cargarProducto(){
        this.productDetail = this.productService.getProductosById(this.route.snapshot.paramMap.get("id"));
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el producto codigo ${id}?`)){
            this.productService.deleteProducto(id);
            this.router.navigateByUrl("/productos");
        }
    }
}
