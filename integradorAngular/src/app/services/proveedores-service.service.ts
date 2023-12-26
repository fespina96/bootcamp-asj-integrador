import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';
import { proveedoresData } from '../data/proveedores';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

    constructor(private router:Router) { }

    provList = proveedoresData;

    errorProveedor:Proveedor = {
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
    }

    getProveedores(){
        return this.provList;
    }

    getProovedorById(id:any){
        if(id>0){
            return this.provList.filter(item=>item.cod==id)[0];
        }else{
            alert('Error al cargar proveedor.')
            return this.errorProveedor;
        }
    }

    public addProveedor(proveedorNuevo:Proveedor){
        if(this.provList.find(item=>item.cod==proveedorNuevo.cod)){
            alert('El codigo debe ser único.');
        }else{
            this.provList.push(proveedorNuevo);
            alert('Proveedor añadido correctamente.');
            this.router.navigateByUrl('/proveedores');
        }
    }

    public editProveedor(provEditInput:Proveedor,id:any){
        let flag = false;
        for(let x=0;x<this.provList.length;x++){
            if(this.provList[x].cod == id){
                this.provList[x] = provEditInput;
                flag=true;
                break;
            }
        }
        if(flag=true){
            alert('Proveedor editado correctamente.');
            this.router.navigateByUrl('/proveedores');
        }else{
            alert('Error al editar proveedor.');
        }
    }

    public deleteProveedor(id:any){
        this.provList = this.provList.filter(item=>item.cod!=id);
        alert('Proveedor eliminado correctamente');
    }
}
