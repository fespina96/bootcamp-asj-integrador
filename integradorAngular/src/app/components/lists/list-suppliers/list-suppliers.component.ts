import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../interfaces/supplier';
import { SupplierService } from '../../../services/supplier.service';

@Component({
    selector: 'app-list-suppliers',
    templateUrl: './list-suppliers.component.html',
    styleUrl: './list-suppliers.component.css'
})
export class ListSuppliersComponent implements OnInit{
    
    constructor(private suppService:SupplierService){}

    suppList:Array<Supplier> = []

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.suppService.getSuppliers().subscribe(
            (res)=>this.suppList=res
        );
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el proveedor?`)){
            this.suppService.deleteSupplier(id);
            this.loadList();
        }
    }
}
