import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../../services/product-service.service';
import { NgForm } from '@angular/forms';
import { ProductCategory } from '../../../interfaces/product-category';
import { ToastService } from '../../../services/toast.service';

@Component({
    selector: 'app-form-product-category',
    templateUrl: './form-product-category.component.html',
    styleUrl: './form-product-category.component.css'
})
export class FormCategoryComponent {

    constructor(private _NgbActiveModal: NgbActiveModal, private productService:ProductService, private toastService:ToastService){}

    get activeModal() {
        return this._NgbActiveModal;
    }

    categoryInput:ProductCategory={
        name:"",
        description:""
    };

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            this.productService.addProductCategory(this.categoryInput).subscribe(
                {
                    next:(data)=>{console.log(data)},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{this._NgbActiveModal.close()}
                }
            )
        }
    }
}
