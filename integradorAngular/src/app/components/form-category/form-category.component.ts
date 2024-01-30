import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.css'
})
export class FormCategoryComponent {

    constructor(private _NgbActiveModal: NgbActiveModal){}
}
