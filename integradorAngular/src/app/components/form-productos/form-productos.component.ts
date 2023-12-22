import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.css'
})
export class FormProductosComponent implements OnInit{
    productFormInput:Producto = {
        cod:0,
        prov:"",
        cat:"",
        name_prod:"",
        desc:"",
        price:0,
    };

    constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router){}

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
    }

    formProcedure(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //EDITO PRODUCTO
            this.productService.editProducto(this.productFormInput,routeSnapshot);
        }else{
            //AÑADO PRODUCTO
            this.productService.addProducto(this.productFormInput);
            alert('Producto añadido correctamente.');
            this.router.navigateByUrl('/productos');
        }
    }


}
