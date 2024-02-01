import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../interfaces/supplier';
@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrl: './supplier-view.component.css'
})
export class SupplierViewComponent {
    constructor(private route:ActivatedRoute, private supplierService:SupplierService, private router:Router){}

    supplierDetail:Supplier = {
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
    }

    ngOnInit(): void {
        this.loadSupplier();
    }

    loadSupplier(){
        this.supplierService.getSupplierById(this.route.snapshot.paramMap.get("id")).subscribe(
            (res)=>this.supplierDetail=res
        );
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el proveedor codigo ${id}?`)){
            this.supplierService.deleteSupplier(id);
            this.router.navigateByUrl("/proveedores");
        }
    }
}
