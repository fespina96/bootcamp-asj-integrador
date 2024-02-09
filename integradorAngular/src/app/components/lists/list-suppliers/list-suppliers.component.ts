import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../interfaces/supplier';
import { SupplierService } from '../../../services/supplier.service';
import { SupplierFilterOptions } from '../../../interfaces/supplier-filter-options';
import { ToastService } from '../../../services/toast.service';

@Component({
    selector: 'app-list-suppliers',
    templateUrl: './list-suppliers.component.html',
    styleUrl: './list-suppliers.component.css'
})
export class ListSuppliersComponent implements OnInit{
    
    constructor(private suppService:SupplierService, private toastService:ToastService){}

    suppList:Array<Supplier> = []

    activeMode=true;

    filteringMode=false;

    activeFilters:SupplierFilterOptions={
        code:"",
        name:""
    }

    defaultImage = "/assets/img/default.jpg";

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.suppService.getSuppliers().subscribe(
            {
                next:(data)=>{this.suppList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
        this.activeMode=true;
    }

    loadDeletedList(){
        this.suppService.getDeletedSuppliers().subscribe(
            {
                next:(data)=>{this.suppList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
        this.activeMode=false;
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el proveedor?`)){
            this.suppService.deleteSupplier(id).subscribe(
                {
                    next:(data)=>{console.log(data)},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{this.toastService.show("Proveedor eliminado.",{ classname: 'bg-success', delay: 10000 });this.loadList()}
                }
            );
        }
    }

    undoDeleteListItem(id:any){
        if(confirm(`Esta seguro que desea restablecer el proveedor?`)){
            this.suppService.undoDeleteSupplier(id).subscribe(
                {
                    next:(data)=>{console.log(data)},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{this.toastService.show("Proveedor restablecido.",{ classname: 'bg-success', delay: 10000 });this.loadDeletedList()}
                }
            );
        }
    }

    toggleFilter(){
        this.filteringMode=!this.filteringMode;
    }

    filterList(){
        if(this.activeMode){
            this.suppService.getFilteredSuppliers(this.activeFilters).subscribe(
                {
                    next:(data)=>{this.suppList=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
            )
        }else{
            this.suppService.getFilteredDeletedSuppliers(this.activeFilters).subscribe(
                {
                    next:(data)=>{this.suppList=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
            )
        }
    }

    sortListByCode(input:any){
        if(input=='asc'){
            this.suppList = this.suppList.sort((a:Supplier,b:Supplier)=>a.code.localeCompare(b.code));
        }else if(input=='desc'){
            this.suppList = this.suppList.sort((a:Supplier,b:Supplier)=>b.code.localeCompare(a.code));
        }
    }

    sortListByName(input:any){
        if(input=='asc'){
            this.suppList = this.suppList.sort((a:Supplier,b:Supplier)=>a.name.localeCompare(b.name));
        }else if(input=='desc'){
            this.suppList = this.suppList.sort((a:Supplier,b:Supplier)=>b.name.localeCompare(a.name));
        }
    }

    sortListByRegion(input:any){
        this.suppList = this.suppList.sort((a:Supplier,b:Supplier)=>a.state.name.localeCompare(b.state.name));
        if(input=='asc'){
            this.suppList = this.suppList.sort((a:Supplier,b:Supplier)=>a.country.name.localeCompare(b.country.name));
        }else if(input=='desc'){
            this.suppList = this.suppList.sort((a:Supplier,b:Supplier)=>b.country.name.localeCompare(a.country.name));
        }
    }
}
