import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from '../../services/proveedores-service.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.component.html',
  styleUrl: './form-proveedores.component.css'
})
export class FormProveedoresComponent implements OnInit{

    constructor(private route:ActivatedRoute, private provService:ProveedoresService, private router:Router, private countriesService:CountriesService){}

    provFormInput:Proveedor = {
        cod:0,
        raz_social:"",
        rubro:"",
        contact:{
            website:"",
            email:"",
            phone:""
        },
        address:{
            street:"",
            zip_code:"",
            state_id:0,
            country_id:0
        },
        datos_fiscales:{
            cuit:"",
            condition:""
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

    ngOnInit(): void {
        this.loadForm();
    }

    countryChange():void{
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
    }

    formProcedure(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //EDITO PRODUCTO
            this.provService.editProveedor(this.provFormInput,routeSnapshot);
        }else{
            //AÑADO PRODUCTO
            this.provService.addProveedor(this.provFormInput);
        }
    }
}
