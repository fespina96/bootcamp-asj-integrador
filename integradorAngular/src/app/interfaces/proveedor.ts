export interface Proveedor {
    cod:number,
    raz_social:string,
    rubro:string,
    contact:contact,
    address:address,
    datos_fiscales:datos_fiscales,
    ref_contact:ref_contact
}

export interface contact{
    website:string,
    email:string,
    phone:string
}

export interface address{
    street:string,
    zip_code:string,
    state:string,
    country:string
}

export interface datos_fiscales{
    cuit:string,
    condition:string
}

export interface ref_contact{
    name:string,
    surname:string,
    phone:string,
    email:string,
    role:string
}