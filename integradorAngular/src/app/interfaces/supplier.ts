export interface Supplier {
    id:number|"",
    code:string,
    name:string,
    supplierCategoryId:number|"",
    logoImageUrl:string,
    email:string,
    phone:string,
    website:string,
    address:string,
    zipCode:string,
    cuit:string,
    conditionId:number|"",
    countryId:number|"",
    stateId:number|"",
    contactName:string,
    contactSurname:string,
    contactEmail:string,
    contactPhone:string,
    contactRole:string,
    createdAt:Date|"",
    updatedAt:Date|"",
    deletedAt:Date|""
}