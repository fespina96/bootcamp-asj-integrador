import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../services/order-service.service';
import { SupplierService } from '../../../services/supplier.service';
import { Order } from '../../../interfaces/order';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product-service.service';

@Component({
    selector: 'app-form-ordenes',
    templateUrl: './form-ordenes.component.html',
    styleUrl: './form-ordenes.component.css'
})
export class FormOrdenesComponent {
    orderFormInput:Order = {
        id:undefined,
        emisionDate:undefined,
        estimatedDeliveryDate:undefined,
        deliveryDate:undefined,
        address:"",
        supplier:{id:undefined,name:""},
        total:undefined,
        orderState:{id:undefined,name:""},
        createdAt:undefined,
        updatedAt:undefined,
        deletedAt:undefined
    };

    suppList:any = [];

    currentDay = new Date();

    minDate = new Date();

    prodList:{ orderId:any; productId: any; quantity:any }[]=[];

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
            this.orderService.getOrderById(routeSnapshot).subscribe(
                (res)=>this.orderFormInput = res
            );
        }else{
            //LOGICA FORM AÑADIR
            this.orderFormInput.emisionDate = new Date(`${this.currentDay.getFullYear()}-${('0' + (this.currentDay.getMonth()+1)).slice(-2)}-${('0' + this.currentDay.getDate()).slice(-2)}`);
            let estimatedDateMin = new Date(this.orderFormInput.emisionDate);
            estimatedDateMin.setDate(estimatedDateMin.getDate() + 3);
            this.orderFormInput.estimatedDeliveryDate = new Date(`${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`);
            this.minDate = this.orderFormInput.estimatedDeliveryDate;
        }
        this.suppList = this.provService.getSuppliers();
    }

    formProcedure(form:NgForm){
        if(form.valid){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO ORDEN
                this.orderService.editOrder(routeSnapshot,this.orderFormInput);
            }else{
                //AÑADO ORDEN
                this.orderService.addOrder(this.orderFormInput);
            }
        }
    }

    emisionChange(){
        if(this.orderFormInput.emisionDate!=undefined){
            let estimatedDateMin = new Date(this.orderFormInput.emisionDate);
            estimatedDateMin.setDate(estimatedDateMin.getDate() + 3);
            this.orderFormInput.estimatedDeliveryDate = new Date(`${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`);
            this.minDate = this.orderFormInput.estimatedDeliveryDate;
        }
    }

    changeSupplier(){
        this.selectedProduct = "";
        this.prodList = [];
        this.prodService.getProductsBySupplierId(this.orderFormInput.supplier.id).subscribe(
            (res)=>this.prodList = res
        );
    }

    addProductToOrder(prodId:string,prodQty:any){
        if(prodQty>0 && prodId!=""){
                let item = this.prodList.find(item=>item.productId==prodId);
                item? item.quantity+=prodQty:this.prodList.push({orderId:"",productId:prodId,quantity:prodQty});
                alert("Producto añadido correctamente.")
        }
    }

    deleteOrderProduct(id:any){
        if(id.length>=4){
            this.prodList = this.prodList.filter(item=>item.productId!=id);
        }
    }

    clearOrder(){
        this.prodList = [];
        this.prodList = [];
    }
}