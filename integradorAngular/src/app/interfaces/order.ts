export interface Order {
    id?:number,
    emisionDate?:Date,
    estimatedDeliveryDate?:Date,
    deliveryDate?:Date,
    address:string,
    supplier:{id?:number,name:string},
    total?:number,
    orderState:{id?:number,name:string},
    createdAt?:Date,
    updatedAt?:Date,
    deletedAt?:Date
}