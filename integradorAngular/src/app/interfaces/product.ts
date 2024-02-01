export interface Product{
    id?:number,
    skuCode:string,
    supplier:{id?:number,name:string},
    productCategory:{id?:number,name:string},
    name:string,
    description:string,
    price?:number,
    imageUrl:string,
    createdAt?:Date,
    updatedAt?:Date,
    deletedAt?:Date
}
