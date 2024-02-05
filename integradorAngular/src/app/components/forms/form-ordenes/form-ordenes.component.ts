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
        total:0,
        orderState:{id:1,name:""},
        createdAt:undefined,
        updatedAt:undefined,
        deletedAt:undefined
    };

    suppList:any = [];

    currentDay = new Date();

    minDate = "";

    orderProdList:OrderListItem[]=[];

    suppProdList:any = [];

    selectedProduct = "";
    selectedProductQty = 1;

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
            this.orderFormInput.estimatedDeliveryDate = `${estimatedDateMin.getFullYear()}-${('0' + (estimatedDateMin.getMonth()+1)).slice(-2)}-${('0' + estimatedDateMin.getDate()).slice(-2)}`;
            this.minDate = this.orderFormInput.estimatedDeliveryDate;
        }
        this.provService.getSuppliers().subscribe(
            (res)=>this.suppList=res
        );
    }

    formProcedure(form:NgForm){
        if(form.valid){
            let routeSnapshot = this.route.snapshot.paramMap.get('editId');
            if(routeSnapshot){
                //EDITO ORDEN
                this.orderService.editOrder(routeSnapshot,this.orderFormInput).subscribe(
                    (res)=>console.log(res),
                    (complete)=>{this.addProductsToLastOrder();this.router.navigateByUrl("/ordenes")}
                );
            }else{
                //AÑADO ORDEN
                this.orderService.addOrder(this.orderFormInput).subscribe(
                    (res)=>console.log(res),
                    (complete)=>{this.addProductsToLastOrder();this.router.navigateByUrl("/ordenes")}
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
            (res)=>this.suppProdList = res
        );
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
                        this.orderFormInput.total+=product.price;
                        alert("Producto añadido correctamente.")
                    }
                )
                
        }
    }

    deleteOrderProduct(id:any){
        if(id!=null){
            this.orderProdList = this.orderProdList.filter((item:OrderListItem)=>item.product.id!=id);
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
                        // Now, you can add the order product
                        this.orderService.addOrderProducts(item).subscribe(
                            (res) => console.log(res),
                            (error) => console.error('Error adding order products:', error)
                        );
                    });
                },
                (error) => console.error('Error getting last order ID:', error)
            );
        }
    }
}
