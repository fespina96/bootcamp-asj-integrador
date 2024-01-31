import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../interfaces/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../services/supplier.service';
import { CountriesService } from '../../services/countries.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-proveedores',
    templateUrl: './form-suppliers.component.html',
    styleUrl: './form-suppliers.component.css'
})
export class FormSuppliersComponent implements OnInit{

    constructor(private route:ActivatedRoute, private suppService:SupplierService, private router:Router, private countriesService:CountriesService){}

    suppFormInput:Supplier = {
        id:"",
        code:"",
        name:"",
        supplierCategoryId:"",
        logoImageUrl:"",
        email:"",
        phone:"",
        website:"",
        address:"",
        zipCode:"",
        cuit:"",
        conditionId:"",
        countryId:"",
        stateId:"",
        contactName:"",
        contactSurname:"",
        contactEmail:"",
        contactPhone:"",
        contactRole:"",
        createdAt:"",
        updatedAt:"",
        deletedAt:""
    };

    countryList:any = [];

    stateList:any = [];

    conditionList:any = [];

    ngOnInit(): void {
        this.loadForm();
    }

    countryChange():void{
        this.suppFormInput.stateId = "";
        this.countriesService.getCountryStatesById(this.suppFormInput.countryId).subscribe(
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
        this.countryList = this.countriesService.getCountries();
        this.suppService.getConditions().subscribe(
            (res)=>this.conditionList=res
        );

    }

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO PRODUCTO
                this.suppService.editSupplier(routeSnapshot,this.suppFormInput);
            }else{
                //AÑADO PRODUCTO
                this.suppService.addSupplier(this.suppFormInput);
            }
        }
    }
}
