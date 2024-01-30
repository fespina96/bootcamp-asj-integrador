import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../interfaces/supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../services/supplier.service';
import { CountriesService } from '../../services/countries.service';
import { condicionData } from '../../data/condicion';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.component.html',
  styleUrl: './form-proveedores.component.css'
})
export class FormProveedoresComponent implements OnInit{

    constructor(private route:ActivatedRoute, private provService:SupplierService, private router:Router, private countriesService:CountriesService){}

    provFormInput:Supplier = {
        cod:"",
        raz_social:"",
        rubro:"",
        logo_img_url:"",
        contact:{
            website:"",
            email:"",
            phone:""
        },
        address:{
            street:"",
            zip_code:"",
            state_id:"",
            country_id:""
        },
        datos_fiscales:{
            cuit:"",
            cod_condicion:""
        },
        ref_contact:{
            name:"",
            surname:"",
            phone:"",
            email:"",
            role:""
        }
    };

    countryList:any = [];

    stateList:any = [];

    condicionList:any = [];

    ngOnInit(): void {
        this.loadForm();
    }

    countryChange():void{
        this.provFormInput.address.state_id = "";
        this.stateList = this.countriesService.getStates(this.provFormInput.address.country_id);
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.provFormInput = this.provService.getProovedorById(routeSnapshot);
        }else{
            //LOGICA FORM AÑADIR
        }
        this.countryList = this.countriesService.getCountries();
        this.condicionList = condicionData;
    }

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO PRODUCTO
                this.provService.editSupplier(this.provFormInput,routeSnapshot);
            }else{
                //AÑADO PRODUCTO
                this.provService.addProveedor(this.provFormInput);
            }
        }
    }
}
