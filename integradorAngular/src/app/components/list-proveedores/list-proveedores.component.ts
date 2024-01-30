import { Component, OnInit } from '@angular/core';
import { proveedoresData } from '../../data/proveedores';
import { Supplier } from '../../interfaces/supplier';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-list-proveedores',
  templateUrl: './list-proveedores.component.html',
  styleUrl: './list-proveedores.component.css'
})
export class ListProveedoresComponent implements OnInit{
    
    constructor(private provService:SupplierService){}

    provList:Array<Supplier> = []

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.provList = this.provService.getSuppliers();
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el proveedor codigo ${id}?`)){
            this.provService.deleteSupplier(id);
            this.loadList();
        }
    }
}
