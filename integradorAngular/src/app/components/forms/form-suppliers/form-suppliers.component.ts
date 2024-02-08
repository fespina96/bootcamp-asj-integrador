import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../interfaces/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../../services/supplier.service';
import { CountriesService } from '../../../services/countries.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormSupplierCategoryComponent } from '../form-supplier-category/form-supplier-category.component';
import { ToastService } from '../../../services/toast.service';

@Component({
    selector: 'app-form-proveedores',
    templateUrl: './form-suppliers.component.html',
    styleUrl: './form-suppliers.component.css'
})
export class FormSuppliersComponent implements OnInit{

    constructor(private route:ActivatedRoute, private suppService:SupplierService, private router:Router, private countriesService:CountriesService, private modalCall:NgbModal, private toastService:ToastService){}


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
            {
                next:(data)=>{this.stateList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.suppService.getSupplierById(routeSnapshot).subscribe(
                {
                    next:(data)=>{this.suppFormInput=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
            );
        }else{
            //LOGICA FORM AÑADIR
        }
        this.countriesService.getCountries().subscribe(
            {
                next:(data)=>{this.countryList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            } 
        );
        this.suppService.getConditions().subscribe(
            {
                next:(data)=>{this.conditionList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            } 
        );
        this.suppService.getSupplierCategories().subscribe(
            {
                next:(data)=>{this.categoryList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        )

    }

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                this.suppService.editSupplier(routeSnapshot,this.suppFormInput).subscribe(
                    {
                        next:(data)=>{console.log(data)},
                        error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                        complete:()=>{this.toastService.show("Proveedor editado correctamente.",{ classname: 'bg-success', delay: 10000 });this.router.navigateByUrl("/proveedores");}
                    }
                );
            }else{
                this.suppService.addSupplier(this.suppFormInput).subscribe(
                    {
                        next:(data)=>{console.log(data)},
                        error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                        complete:()=>{this.toastService.show("Proveedor agregado correctamente.",{ classname: 'bg-success', delay: 10000 });this.router.navigateByUrl("/proveedores");}
                    }
                );;
            }
        }
    }

    addRubroModal(){
        let modal = this.modalCall.open(FormSupplierCategoryComponent, {
            windowClass: 'modal-job-scrollable'
        });
        modal.result.then(()=>
            this.suppService.getSupplierCategories().subscribe(
                {
                    next:(data)=>{this.categoryList=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
        ));
    }
}
