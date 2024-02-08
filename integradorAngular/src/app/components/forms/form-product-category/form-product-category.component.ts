import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../../services/product-service.service';
import { NgForm } from '@angular/forms';
import { ProductCategory } from '../../../interfaces/product-category';

@Component({
    selector: 'app-form-product-category',
    templateUrl: './form-product-category.component.html',
    styleUrl: './form-product-category.component.css'
})
export class FormCategoryComponent {

    constructor(private _NgbActiveModal: NgbActiveModal, private productService:ProductService){}

    get activeModal() {
        return this._NgbActiveModal;
    }

    categoryInput:ProductCategory={
        name:"",
        description:""
    };

    formProcedure(formInput:NgForm){
        console.log(JSON.stringify(this.categoryInput));
        if(formInput.valid && formInput.touched){
            this.productService.addProductCategory(this.categoryInput).subscribe(
                (res)=>console.log(res),
                (complete)=>this._NgbActiveModal.close()
            )
        }
    }
}
