import { Component, OnInit } from '@angular/core';
import { ordenesData } from '../../data/ordenes';
import { OrderService } from '../../services/order-service.service';
import { Orden } from '../../interfaces/orden';
@Component({
  selector: 'app-list-ordenes',
  templateUrl: './list-ordenes.component.html',
  styleUrl: './list-ordenes.component.css'
})
export class ListOrdenesComponent implements OnInit{
    constructor(private orderService:OrderService){}

    orderList:Array<Orden> = []

    ngOnInit(): void {
        this.loadList();
    }

    loadList(){
        this.orderList = this.orderService.getOrdenes();
    }

    checkListItem(id:any){
        if(confirm(`Esta seguro que desea cancelar la orden número ${id}?`)){
            this.orderService.checkOrder(id);
            this.loadList();
        }
    }
}
