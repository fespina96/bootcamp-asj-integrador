import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../interfaces/product';
import { SupplierService } from '../../services/supplier.service';

@Component({
    selector: 'app-form-productos',
    templateUrl: './form-products.component.html',
    styleUrl: './form-products.component.css'
})
export class FormProductosComponent implements OnInit{
    productFormInput:Product = {
        id:"",
        skuCode:"",
        supplierId:"",
        productCategoryId:"",
        name:"",
        description:"",
        price:"",
        imageUrl:"",
        createdAt:"",
        updatedAt:"",
        deletedAt:""
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
