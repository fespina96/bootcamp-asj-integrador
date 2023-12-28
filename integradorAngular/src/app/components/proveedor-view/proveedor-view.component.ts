import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from '../../services/proveedores-service.service';
import { Proveedor } from '../../interfaces/proveedor';
@Component({
  selector: 'app-proveedor-view',
  templateUrl: './proveedor-view.component.html',
  styleUrl: './proveedor-view.component.css'
})
export class ProveedorViewComponent {
    constructor(private route:ActivatedRoute, private proveedorService:ProveedoresService, private router:Router){}

    proveedorDetail:Proveedor = {
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
    }

    ngOnInit(): void {
        this.cargarProveedor();
    }

    cargarProveedor(){
        this.proveedorDetail = this.proveedorService.getProovedorById(this.route.snapshot.paramMap.get("id"));
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el proveedor codigo ${id}?`)){
            this.proveedorService.deleteProveedor(id);
            this.router.navigateByUrl("/proveedores");
        }
    }
}
