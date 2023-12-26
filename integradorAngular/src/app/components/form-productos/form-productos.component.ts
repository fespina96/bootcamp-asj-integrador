import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { Producto } from '../../interfaces/producto';
import { ProveedoresService } from '../../services/proveedores-service.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.css'
})
export class FormProductosComponent implements OnInit{
    productFormInput:Producto = {
        cod:0,
        prov_id:1,
        cat:"",
        name_prod:"",
        desc:"",
        price:0,
    };

    provList:any = [];

    constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router, private provService:ProveedoresService){}

    ngOnInit(): void {
        this.loadForm();
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.productFormInput = this.productService.getProductosById(routeSnapshot);
        }else{
            //LOGICA FORM AÑADIR
        }
        this.provList = this.provService.getProveedores();
    }

    formProcedure(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //EDITO PRODUCTO
            this.productService.editProducto(this.productFormInput,routeSnapshot);
        }else{
            //AÑADO PRODUCTO
            this.productService.addProducto(this.productFormInput);
        }
    }


}
