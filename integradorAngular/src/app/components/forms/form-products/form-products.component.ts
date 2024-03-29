import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product-service.service';
import { Product } from '../../../interfaces/product';
import { SupplierService } from '../../../services/supplier.service';
import { ToastService } from '../../../services/toast.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCategoryComponent } from '../form-product-category/form-product-category.component';

@Component({
    selector: 'app-form-products',
    templateUrl: './form-products.component.html',
    styleUrl: './form-products.component.css',
})
export class FormProductsComponent implements OnInit{
    productFormInput:Product = {
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
    };

    provList:any = [];

    catList:any = [];

    constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router, private suppService:SupplierService, public toastService:ToastService, private modalCall:NgbModal){}

    ngOnInit(): void {
        this.loadForm();
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.productService.getProductById(routeSnapshot).subscribe(
                {
                    next:(data)=>{this.productFormInput=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
            );
        }else{
            //LOGICA FORM AÑADIR
        }
        this.suppService.getSuppliers().subscribe(
            {
                next:(data)=>{this.provList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
        this.productService.getProductCategories().subscribe(
            {
                next:(data)=>{this.catList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        )
    }

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO PRODUCTO
                this.productService.editProduct(routeSnapshot,this.productFormInput).subscribe(
                    {
                        next:(data)=>{console.log(data)},
                        error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                        complete:()=>{this.toastService.show("Producto editado correctamente.",{ classname: 'bg-success', delay: 10000 });this.router.navigateByUrl("/productos");}
                    }
                );
            }else{
                //AÑADO PRODUCTO
                this.productService.addProduct(this.productFormInput).subscribe(
                    {
                        next:(data)=>{console.log(data)},
                        error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                        complete:()=>{this.toastService.show("Producto añadido correctamente.",{ classname: 'bg-success', delay: 10000 });this.router.navigateByUrl("/productos");}
                    }
                );
            }
        }
    }

    addCategoryModal(){
        let modal = this.modalCall.open(FormCategoryComponent, {
            windowClass: 'modal-job-scrollable'
        });
        modal.result.then(()=>        
            this.productService.getProductCategories().subscribe(
            (res)=>this.catList=res
        ));
    }

}
