import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { Producto } from '../../interfaces/producto';
import { ProveedoresService } from '../../services/proveedores-service.service';
import { categoriasData } from '../../data/categorias';
@Component({
    selector: 'app-form-productos',
    templateUrl: './form-productos.component.html',
    styleUrl: './form-productos.component.css'
})
export class FormProductosComponent implements OnInit{
    productFormInput:Producto = {
        cod_sku:"",
        prov_id:"",
        cat_id:"",
        name_prod:"",
        desc:"",
        price:"",
        img_url:""
    };

    provList:any = [];

    catList:any = [];

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
        this.catList = categoriasData;
    }

    formProcedure(formInput:NgForm){
        if(formInput.valid && formInput.touched){
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

}
