export interface Order {
    id:number|"",
    emisionDate:Date|"",
    estimatedDeliveryDate:Date|"",
    deliveryDate:Date|"",
    address:string,
    supplierId:string,
    total:number|"",
    orderStateId:number|"",
    createdAt:Date|"",
    updatedAt:Date|"",
    deletedAt:Date|""
}