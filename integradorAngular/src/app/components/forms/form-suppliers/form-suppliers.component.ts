import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../interfaces/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../../services/supplier.service';
import { CountriesService } from '../../../services/countries.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormSupplierCategoryComponent } from '../form-supplier-category/form-supplier-category.component';

@Component({
    selector: 'app-form-proveedores',
    templateUrl: './form-suppliers.component.html',
    styleUrl: './form-suppliers.component.css'
})
export class FormSuppliersComponent implements OnInit{

    constructor(private route:ActivatedRoute, private suppService:SupplierService, private router:Router, private countriesService:CountriesService, private modalCall:NgbModal){}


    suppFormInput:Supplier = {
        id:undefined,
        code:"",
        name:"",
        supplierCategory:{id:undefined,name:""},
        logoImageUrl:"",
        email:"",
        phone:"",
        website:"",
        address:"",
        zipCode:"",
        district:"",
        cuit:"",
        condition:{id:undefined,name:""},
        country:{id:undefined,name:""},
        state:{id:undefined,name:""},
        contactName:"",
        contactSurname:"",
        contactEmail:"",
        contactPhone:"",
        contactRole:"",
        createdAt:undefined,
        updatedAt:undefined,
        deletedAt:undefined
    };

    categoryList:any = [];

    countryList:any = [];

    stateList:any = [];

    conditionList:any = [];

    ngOnInit(): void {
        this.loadForm();
    }

    countryChange():void{
        this.suppFormInput.state.id = undefined;
        this.countriesService.getCountryStatesById(this.suppFormInput.country.id).subscribe(
            (res)=>this.stateList=res
        );
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.suppService.getSupplierById(routeSnapshot).subscribe(
                (res)=>this.suppFormInput=res
            );
        }else{
            //LOGICA FORM AÑADIR
        }
        this.countriesService.getCountries().subscribe(
            (res)=>this.countryList=res    
        );
        this.suppService.getConditions().subscribe(
            (res)=>this.conditionList=res
        );
        this.suppService.getSupplierCategories().subscribe(
            (res)=>this.categoryList=res
        )

    }

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO PRODUCTO
                this.suppService.editSupplier(routeSnapshot,this.suppFormInput).subscribe(
                    (res)=>console.log(res),
                    (complete)=>this.router.navigateByUrl("/proveedores")
                );
            }else{
                //AÑADO PRODUCTO
                this.suppService.addSupplier(this.suppFormInput).subscribe(
                    (res)=>console.log(res),
                    (complete)=>this.router.navigateByUrl("/proveedores")
                );;
            }
        }

        console.log(formInput);
    }

    addRubroModal(){
        let modal = this.modalCall.open(FormSupplierCategoryComponent, {
            windowClass: 'modal-job-scrollable'
        });
        modal.result.then(()=>
            this.suppService.getSupplierCategories().subscribe(
            (res)=>this.categoryList=res
        ));
    }
}
