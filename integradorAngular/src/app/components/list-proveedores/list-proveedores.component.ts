import { Component, OnInit } from '@angular/core';
import { proveedoresData } from '../../data/proveedores';
import { Proveedor } from '../../interfaces/proveedor';
import { ProveedoresService } from '../../services/proveedores-service.service';

@Component({
  selector: 'app-list-proveedores',
  templateUrl: './list-proveedores.component.html',
  styleUrl: './list-proveedores.component.css'
})
export class ListProveedoresComponent implements OnInit{
    
    constructor(private provService:ProveedoresService){}

    provList:Array<Proveedor> = []

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.provList = this.provService.getProveedores();
    }

    deleteListItem(id:any){
        if(confirm(`Esta seguro que desea eliminar el proveedor codigo ${id}?`)){
            this.provService.deleteProveedor(id);
            this.loadList();
        }
    }
}
