import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../interfaces/supplier';
import { ToastService } from '../../../services/toast.service';
@Component({
    selector: 'app-supplier-view',
    templateUrl: './supplier-view.component.html',
    styleUrl: './supplier-view.component.css'
})
export class SupplierViewComponent {
    constructor(private route:ActivatedRoute, private supplierService:SupplierService, private router:Router, private toastService:ToastService){}

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
    }

    ngOnInit(): void {
        this.loadSupplier();
    }

    loadSupplier(){
        this.supplierService.getSupplierById(this.route.snapshot.paramMap.get("id")).subscribe(
            {
                next:(data)=>{this.supplierDetail=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el proveedor codigo ${id}?`)){
            this.supplierService.deleteSupplier(id).subscribe(
                {
                    next:(data)=>{},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{
                        this.toastService.show("Proveedor borrado correctamente.",{ classname: 'bg-success', delay: 10000 })
                        this.router.navigateByUrl("/proveedores");
                    }
                }
            );
            
        }
    }
}
