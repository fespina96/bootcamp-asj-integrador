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
        supplier_category_id:"",
        logo_image_url:"",
        email:"",
        phone:"",
        website:"",
        address:"",
        zip_code:"",
        cuit:"",
        condition_id:"",
        country_id:"",
        state_id:"",
        contact_name:"",
        contact_surname:"",
        contact_email:"",
        contact_phone:"",
        contact_role:"",
        created_at:"",
        updated_at:"",
        deleted_at:""
    };

    countryList:any = [];

    stateList:any = [];

    conditionList:any = [];

    ngOnInit(): void {
        this.loadForm();
    }

    countryChange():void{
        this.suppFormInput.state_id = "";
        this.countriesService.getCountryStatesById(this.suppFormInput.country_id).subscribe(
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
