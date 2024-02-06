import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { SupplierService } from '../../services/supplier.service';
import { OrderService } from '../../services/order-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    constructor(private productService:ProductService,private supplierService:SupplierService, private orderService:OrderService){}

    prodTotal=0;
    suppTotal=0;
    orderTotal=0;

    ngOnInit(): void {
        this.loadStats();
    }

    loadStats(){
        this.productService.getProducts().subscribe(
            (res)=>this.prodTotal=res.length
        );
        this.supplierService.getSuppliers().subscribe(
            (res)=>this.suppTotal=res.length
        );
        this.orderService.getOrders().subscribe(
            (res)=>this.orderTotal=res.length
        );
    }
}
