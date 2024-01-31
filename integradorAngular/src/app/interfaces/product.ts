export interface Product{
    id:number|"",
    skuCode:string,
    supplierId:string,
    productCategoryId:number|"",
    name:string,
    description:string,
    price:number|"",
    imageUrl:string,
    createdAt:Date|"",
    updatedAt:Date|"",
    deletedAt:Date|""
}
