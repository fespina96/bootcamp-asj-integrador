import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierService } from '../../../services/supplier.service';
import { SupplierCategory } from '../../../interfaces/supplier-category';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-supplier-category',
    templateUrl: './form-supplier-category.component.html',
    styleUrl: './form-supplier-category.component.css'
})
export class FormSupplierCategoryComponent {
    constructor(private _NgbActiveModal: NgbActiveModal, private suppService:SupplierService){}

    get activeModal() {
        return this._NgbActiveModal;
    }

    categoryInput:SupplierCategory={
        name:""
    };

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            this.suppService.addSupplierCategory(this.categoryInput).subscribe(
                (res)=>console.log(res),
                (complete)=>this._NgbActiveModal.close()
            )
        }
    }
}
