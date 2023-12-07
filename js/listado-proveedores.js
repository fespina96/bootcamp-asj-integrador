let listItems = document.getElementById('table-list-body');

cargarTabla = () =>{
    if(localStorage.getItem("proveedores")==null){
        let proveedores = [{codigo:"1",razon_social:"Juancito SRL",rubro:"Ropa",contacto:{sito_web:"www.juancito.com.ar",email:"contacto@juancito.com.ar",telefono:"11 1234-5678",},direccion:{calle:"Calle Falsa 1234",codigo_postal:"1001",provincia:"Buenos Aires",pais:"Argentina"},datos_fiscales:{cuit:"12-34567890-1",condicion:"OK"},contacto_referencia:{nombre:"Juan Jose",apellido:"Perez",telefono:"11 1234-5678",email:"jjp@juancito.com.ar",rol:"CEO"}},
                            {codigo:"2",razon_social:"Camila SA",rubro:"Tecnología",contacto:{sito_web:"www.camila.com.ar",email:"contacto@camila.com.ar",telefono:"11 2345-6789",},direccion:{calle:"Calle 100% Real 4321",codigo_postal:"4001",provincia:"Santa Fe",pais:"Argentina"},datos_fiscales:{cuit:"32-12345123-3",condicion:"OK"},contacto_referencia:{nombre:"Jose",apellido:"Alegre",telefono:"11 6547-4235",email:"ose.alegre@camila.com.ar",rol:"Empleado"}},
                            {codigo:"3",razon_social:"Pedro SA",rubro:"Carpintería",contacto:{sito_web:"www.pedro.com.ar",email:"contacto@pedro.com.ar",telefono:"11 0123-4567",},direccion:{calle:"Av. Acá A La Vuelta 123",codigo_postal:"2222",provincia:"Cordoba",pais:"Argentina"},datos_fiscales:{cuit:"16-12315553-7",condicion:"OK"},contacto_referencia:{nombre:"Ana María",apellido:"Gomez",telefono:"11 5135-1235",email:"amgomez@pedro.com.ar",rol:"Jefa"}},
                        ];
        localStorage.setItem("proveedores",JSON.stringify(proveedores));
    }
    
    let prov_data = JSON.parse(localStorage.getItem("proveedores"));

    for(x=0;x<prov_data.length;x++){
        proveedoresToTable(prov_data[x]);
    }
}

proveedoresToTable = (obj) =>{

    for(x=0;x<Object.keys(obj).length;x++){
        listItems.innerHTML+=`<th>${""+obj[Object.keys(obj)[x]]}</th>`;
    }
}

cargarTabla();