export interface Order {
    id?:number,
    emisionDate?:Date|string,
    estimatedDeliveryDate?:Date|string,
    deliveryDate?:Date|string,
    address:string,
    supplier:{id?:number,name:string},
    total:number,
    orderState:{id?:number,name:string},
    createdAt?:Date,
    updatedAt?:Date,
    deletedAt?:Date
}