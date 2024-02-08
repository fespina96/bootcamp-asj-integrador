import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../../services/product-service.service';

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

    categoryInput = {
        name:"",
        description:""
    }

    addCategory(){
        this.productService.addProductCategory(this.categoryInput).subscribe(
            (res)=>console.log(res)
        )
    }
}
