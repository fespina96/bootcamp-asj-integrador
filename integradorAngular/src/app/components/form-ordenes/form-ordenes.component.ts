import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order-service.service';
import { ProveedoresService } from '../../services/proveedores-service.service';
import { Orden } from '../../interfaces/orden';

@Component({
  selector: 'app-form-ordenes',
  templateUrl: './form-ordenes.component.html',
  styleUrl: './form-ordenes.component.css'
})
export class FormOrdenesComponent {
    orderFormInput:Orden = {
        order_num:0,
        emision:new Date,
        entrega_estimada:new Date,
        address:"",
        prov_id:1,
        products:"",
        total:0,
        estado:true
    };

    provList:any = [];

    constructor(private route:ActivatedRoute, private orderService:OrderService, private router:Router, private provService:ProveedoresService){}

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
        }
        this.provList = this.provService.getProveedores();
    }

    formProcedure(){
        let routeSnapshot = this.route.snapshot.paramMap.get('editId');
        if(routeSnapshot){
            //EDITO PRODUCTO
            this.orderService.editOrder(this.orderFormInput,routeSnapshot);
        }else{
            //AÑADO PRODUCTO
            this.orderService.addOrder(this.orderFormInput);
        }
    }
}
