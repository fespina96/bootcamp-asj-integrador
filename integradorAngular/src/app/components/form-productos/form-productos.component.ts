import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../interfaces/product';
import { SupplierService } from '../../services/supplier.service';

@Component({
    selector: 'app-form-productos',
    templateUrl: './form-productos.component.html',
    styleUrl: './form-productos.component.css'
})
export class FormProductosComponent implements OnInit{
    productFormInput:Product = {
        id:"",
        sku_code:"",
        supplier_id:"",
        product_category_id:"",
        name:"",
        description:"",
        price:"",
        image_url:"",
        created_at:"",
        updated_at:"",
        deleted_at:""
    };

    provList:any = [];

    catList:any = [];

    constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router, private provService:SupplierService){}

    ngOnInit(): void {
        this.loadForm();
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.productService.getProductById(routeSnapshot).subscribe(
                (res)=>this.productFormInput=res
            );
        }else{
            //LOGICA FORM AÑADIR
        }
        this.provList = this.provService.getSuppliers();
        this.productService.getProductCategories().subscribe(
            (res)=>this.catList=res
        )
    }

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO PRODUCTO
                this.productService.editProduct(routeSnapshot,this.productFormInput);
            }else{
                //AÑADO PRODUCTO
                this.productService.addProduct(this.productFormInput);
            }
        }
    }

    addCategoryModal(){
        alert("nueva categoria");
    }
}
