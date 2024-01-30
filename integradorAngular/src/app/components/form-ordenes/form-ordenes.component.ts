import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order-service.service';
import { SupplierService } from '../../services/supplier.service';
import { Order } from '../../interfaces/orden';
import { NgForm } from '@angular/forms';
import { ItemOrder } from '../../interfaces/item-order';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../interfaces/product';

@Component({
    selector: 'app-form-ordenes',
    templateUrl: './form-ordenes.component.html',
    styleUrl: './form-ordenes.component.css'
})
export class FormOrdenesComponent {
    orderFormInput:Order = {
        order_num:"",
        emision:"",
        entrega_estimada:"",
        address:"",
        prov_id:"",
        products:[],
        total:"",
        estado:true
    };

    provList:any = [];

    currentDay = new Date();

    minDate = "";

    prodList:Array<Product> = [];

    selectedProduct = "";
    selectedProductQty = "";

    constructor(private route:ActivatedRoute, private orderService:OrderService, private router:Router, private provService:SupplierService, private prodService:ProductService){}

    ngOnInit(): void {
        this.loadForm();
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.orderFormInput = this.orderService.getOrderById(routeSnapshot);
        }else{
            //LOGICA FORM AÑADIR
            this.orderFormInput.emision = `${this.currentDay.getFullYear()}-${('0' + (this.currentDay.getMonth()+1)).slice(-2)}-${('0' + this.currentDay.getDate()).slice(-2)}`
            let estimatedDateMin = new Date(this.orderFormInput.emision);
            estimatedDateMin.setDate(estimatedDateMin.getDate() + 3);
            this.orderFormInput.entrega_estimada = `${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`
            this.minDate = this.orderFormInput.entrega_estimada;
        }
        this.provList = this.provService.getSuppliers();
    }

    formProcedure(form:NgForm){
        if(form.valid){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO ORDEN
                this.orderService.editOrder(this.orderFormInput,routeSnapshot);
            }else{
                //AÑADO ORDEN
                this.orderService.addOrder(this.orderFormInput);
            }
        }
    }

    emisionChange(){
        let estimatedDateMin = new Date(this.orderFormInput.emision);
        estimatedDateMin.setDate(estimatedDateMin.getDate() + 3);
        this.orderFormInput.entrega_estimada = `${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`
        this.minDate = this.orderFormInput.entrega_estimada;
    }

    changeProveedor(){
        this.selectedProduct = "";
        this.orderFormInput.products = [];
        this.prodList = this.prodService.getProductosByProvId(this.orderFormInput.prov_id);
    }

    addProductToOrder(prodId:string,prodQty:any){
        if(prodQty>0 && prodId!=""){
                let item = this.orderFormInput.products.find(item=>item.prod_id==prodId);
                item? item.qty+=prodQty:this.orderFormInput.products.push({prod_id:prodId,qty:prodQty});
                alert("Producto añadido correctamente.")
        }
    }

    deleteOrderProduct(id:any){
        if(id.length>=4){
            this.orderFormInput.products = this.orderFormInput.products.filter(item=>item.prod_id!=id);
        }
    }

    clearOrder(){
        this.orderFormInput.products = [];
        this.prodList = [];
    }
}
