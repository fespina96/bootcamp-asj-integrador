let storedArray = [];

window.addEventListener('DOMContentLoaded', event => {
    if(localStorage.getItem('ordenes').length>0){
        storedArray = JSON.parse(localStorage.getItem('ordenes'));
    }else{
        alert('List error.');
        window.history.go(-1);
    }
});

const btnCancel = document.getElementById("btn-cancel");
const btnAlta = document.getElementById("btn-alta");
const inputNumeroOrden = document.getElementById('input-numero');
const inputProveedor = document.getElementById('input-proveedor');
const inputDireccion = document.getElementById('input-direccion');
const inputEmision = document.getElementById('input-emision');
const inputEntrega = document.getElementById('input-entrega');
const inputProductos = document.getElementById('input-productos');
const inputTotal = document.getElementById('input-total');

cargarAltaProducto = () =>{
    let outputObj = {
        "Número":inputNumeroOrden.value,
        "Emisión":inputEmision.value,
        "Entrega Esperada":inputEntrega.value,
        "Proveedor":inputProveedor.value,
        "Dirección":inputDireccion.value,
        "Productos":inputProductos.value.split(","),
        "Total":inputTotal.value,
    }
    storedArray.push(outputObj);
    localStorage.setItem('ordenes', JSON.stringify(storedArray));
    alert('Carga realizada correctamente.');
    window.history.go(-1);
}


cargarBotones = () =>{
    btnAlta.addEventListener('click',()=>cargarAltaProducto());
    btnCancel.addEventListener('click',()=>{window.history.go(-1);});
}

cargarBotones();