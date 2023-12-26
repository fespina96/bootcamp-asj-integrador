import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from '../../services/proveedores-service.service';

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.component.html',
  styleUrl: './form-proveedores.component.css'
})
export class FormProveedoresComponent implements OnInit{
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
            state:"",
            country:""
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

    constructor(private route:ActivatedRoute, private provService:ProveedoresService, private router:Router){}

    ngOnInit(): void {
        this.loadForm();
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.provFormInput = this.provService.getProovedorById(routeSnapshot);
        }else{
            //LOGICA FORM AÑADIR
        }
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
