import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../services/order-service.service';
import { SupplierService } from '../../../services/supplier.service';
import { Order } from '../../../interfaces/order';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product-service.service';
import { last } from 'rxjs';
import { Product } from '../../../interfaces/product';
import { OrderListItem } from '../../../interfaces/order-list-item';
import { ToastService } from '../../../services/toast.service';

@Component({
    selector: 'app-form-orders',
    templateUrl: './form-orders.component.html',
    styleUrl: './form-orders.component.css'
})
export class FormOrdersComponent {
    orderFormInput:Order = {
        id:undefined,
        emisionDate:undefined,
        estimatedDeliveryDate:undefined,
        deliveryDate:undefined,
        address:"",
        supplier:{id:undefined,name:""},
        total:0,
        orderState:{id:1,name:""},
        createdAt:undefined,
        updatedAt:undefined,
        deletedAt:undefined
    };

    suppList:any = [];

    supplierLogo = "";

    currentDay = new Date();

    minDate = "";

    orderProdList:OrderListItem[]=[];

    suppProdList:any = [];

    selectedProduct = "";
    selectedProductQty = 1;

    constructor(private route:ActivatedRoute, private orderService:OrderService, private router:Router, private suppService:SupplierService, private prodService:ProductService, private toastService:ToastService){}

    ngOnInit(): void {
        this.loadForm();
    }

    loadForm(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //LOGICA FORM EDITAR
            this.orderService.getOrderById(routeSnapshot).subscribe(
                {
                    next:(data)=>{this.orderFormInput=data},
                    error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                    complete:()=>{}
                }
            );
        }else{
            //LOGICA FORM AÑADIR
            this.orderFormInput.emisionDate = new Date(`${this.currentDay.getFullYear()}-${('0' + (this.currentDay.getMonth()+1)).slice(-2)}-${('0' + this.currentDay.getDate()).slice(-2)}`);
            let estimatedDateMin = new Date(this.orderFormInput.emisionDate);
            estimatedDateMin.setDate(estimatedDateMin.getDate() + 3);
            this.orderFormInput.estimatedDeliveryDate = `${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`;
            this.minDate = this.orderFormInput.estimatedDeliveryDate;
        }
        this.suppService.getSuppliers().subscribe(
            {
                next:(data)=>{this.suppList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
    }

    formProcedure(form:NgForm){
        if(form.valid){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO ORDEN
                this.orderService.editOrder(routeSnapshot,this.orderFormInput).subscribe(
                    {
                        next:(data)=>{console.log(data)},
                        error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                        complete:()=>{this.toastService.show("Orden editada correctamente.",{ classname: 'bg-success', delay: 10000 });this.addProductsToLastOrder();this.router.navigateByUrl("/ordenes")}
                    }
                );
            }else{
                //AÑADO ORDEN
                this.orderService.addOrder(this.orderFormInput).subscribe(
                    {
                        next:(data)=>{console.log(data)},
                        error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                        complete:()=>{this.toastService.show("Orden añadida correctamente.",{ classname: 'bg-success', delay: 10000 });this.addProductsToLastOrder();this.router.navigateByUrl("/ordenes")}
                    }
                );
            }
        }
    }

    emisionChange(){
        if(this.orderFormInput.emisionDate!=undefined){
            let estimatedDateMin = new Date(this.orderFormInput.emisionDate);
            estimatedDateMin.setDate(estimatedDateMin.getDate() + 3);
            this.orderFormInput.estimatedDeliveryDate = `${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`;
            this.minDate = this.orderFormInput.estimatedDeliveryDate;
        }
    }

    changeSupplier(){
        this.selectedProduct = "";
        this.suppProdList = [];
        this.orderProdList = [];
        this.prodService.getProductsBySupplierId(this.orderFormInput.supplier.id).subscribe(
            {
                next:(data)=>{this.suppProdList=data},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        );
        this.suppService.getSupplierById(this.orderFormInput.supplier.id).subscribe(
            {
                next:(data)=>{this.supplierLogo=data.logoImageUrl},
                error:(error)=>{this.toastService.show(error,{ classname: 'bg-danger text-light', delay: 15000 })},
                complete:()=>{}
            }
        )
    }

    addProductToOrder(prodId:any,prodQty:any){
        if(prodQty>0 && prodId!=null){
                let product:Product;
                this.prodService.getProductById(prodId).subscribe(
                    (res)=>{
                        product=res;
                        let item = this.orderProdList.find((item:OrderListItem)=>item.product.id==prodId);
                        item? item.quantity+=prodQty:this.orderProdList.push({
                            id:{productId:product.id,orderId:undefined},
                            product:{id:product.id,name:product.name},
                            order:{id:undefined},
                            quantity:prodQty
                        }
                        );
                        this.orderFormInput.total+=(product.price*prodQty);
                        this.toastService.show("Producto añadida correctamente.",{ classname: 'bg-success', delay: 10000 });
                    }
                )
                
        }
    }

    deleteOrderProduct(id:any){
        if(id!=null){
            let selectedProduct:any = this.orderProdList.find((item:OrderListItem)=>item.product.id==id);
            let product:Product;
            this.prodService.getProductById(selectedProduct?.product.id).subscribe(
                (res)=>{
                        product=res;
                        this.orderFormInput.total-=(product.price*selectedProduct.quantity);
                        this.orderProdList = this.orderProdList.filter((item:OrderListItem)=>item.product.id!=id);
                        this.toastService.show("Producto borrado correctamente.",{ classname: 'bg-success', delay: 10000 });
                        });
        }
    }

    clearOrder(){
        this.suppProdList = [];
        this.orderProdList = [];
    }

    addProductsToLastOrder(){
        if(this.orderProdList.length!=0){
            this.orderService.getLastOrderId().subscribe(
                (res) => {
                    const lastOrderId = res;
                    this.orderProdList.forEach((item) => {
                        item.order.id = lastOrderId;
                        item.id.orderId = lastOrderId;
                        this.orderService.addOrderProducts(item).subscribe(
                            (res) => {}
                        );
                    });
                }
            );
        }
    }
}
