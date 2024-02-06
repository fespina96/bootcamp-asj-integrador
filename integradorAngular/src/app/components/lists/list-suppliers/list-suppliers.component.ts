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

    mode=true;

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.suppService.getSuppliers().subscribe(
            (res)=>this.suppList=res
        );
        this.mode=true;
    }

    loadDeletedList(){
        this.suppService.getDeletedSuppliers().subscribe(
            (res)=>this.suppList=res
        );
        this.mode=false;
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el proveedor?`)){
            this.suppService.deleteSupplier(id).subscribe(
                (res)=>console.log(res),
                (complete)=>this.loadList()
            );
        }
    }

    undoDeleteListItem(id:any){
        if(confirm(`Esta seguro que desea restablecer el proveedor?`)){
            this.suppService.undoDeleteSupplier(id).subscribe(
                (res)=>console.log(res),
                (complete)=>this.loadDeletedList()
            );
        }
    }
}
