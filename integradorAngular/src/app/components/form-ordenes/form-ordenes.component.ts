import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order-service.service';
import { SupplierService } from '../../services/supplier.service';
import { Order } from '../../interfaces/order';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product-service.service';

@Component({
    selector: 'app-form-ordenes',
    templateUrl: './form-ordenes.component.html',
    styleUrl: './form-ordenes.component.css'
})
export class FormOrdenesComponent {
    orderFormInput:Order = {
        id:"",
        emision_date:"",
        estimated_delivery_date:"",
        delivery_date:"",
        address:"",
        supplier_id:"",
        total:"",
        order_state_id:"",
        created_at:"",
        updated_at:"",
        deleted_at:""
    };

    provList:any = [];

    currentDay = new Date();

    minDate = new Date();

    prodList:{ order_id:any; product_id: any; quantity:any }[]=[];

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
            this.orderFormInput.emision_date = new Date(`${this.currentDay.getFullYear()}-${('0' + (this.currentDay.getMonth()+1)).slice(-2)}-${('0' + this.currentDay.getDate()).slice(-2)}`);
            let estimatedDateMin = new Date(this.orderFormInput.emision_date);
            estimatedDateMin.setDate(estimatedDateMin.getDate() + 3);
            this.orderFormInput.estimated_delivery_date = new Date(`${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`);
            this.minDate = this.orderFormInput.estimated_delivery_date;
        }
        this.provList = this.provService.getSuppliers();
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
        let estimatedDateMin = new Date(this.orderFormInput.emision_date);
        estimatedDateMin.setDate(estimatedDateMin.getDate() + 3);
        this.orderFormInput.estimated_delivery_date = new Date(`${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`);
        this.minDate = this.orderFormInput.estimated_delivery_date;
    }

    changeSupplier(){
        this.selectedProduct = "";
        this.prodList = [];
        this.prodService.getProductsBySupplierId(this.orderFormInput.supplier_id).subscribe(
            (res)=>this.prodList = res
        );
    }

    addProductToOrder(prodId:string,prodQty:any){
        if(prodQty>0 && prodId!=""){
                let item = this.prodList.find(item=>item.product_id==prodId);
                item? item.quantity+=prodQty:this.prodList.push({order_id:"",product_id:prodId,quantity:prodQty});
                alert("Producto añadido correctamente.")
        }
    }

    deleteOrderProduct(id:any){
        if(id.length>=4){
            this.prodList = this.prodList.filter(item=>item.product_id!=id);
        }
    }

    clearOrder(){
        this.prodList = [];
        this.prodList = [];
    }
}
