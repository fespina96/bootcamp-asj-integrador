export interface OrderListItem{
    id:{productId:number|undefined,orderId:number|undefined},
    product:{id:number|undefined,name:string},
    order:{id:number|undefined},
    quantity:number
}