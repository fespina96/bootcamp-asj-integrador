let storedArray = [];

window.addEventListener('DOMContentLoaded', event => {
    if(localStorage.getItem('productos').length>0){
        storedArray = JSON.parse(localStorage.getItem('productos'));
    }else{
        alert('List error.');
        window.history.go(-1);
    }
});

const btnCancel = document.getElementById("btn-cancel");
const btnAlta = document.getElementById("btn-alta");
const inputCodigo = document.getElementById('input-codigo');
const inputProveedor = document.getElementById('input-proveedor');
const inputCategoria = document.getElementById('input-categoria');
const inputProducto = document.getElementById('input-product-name');
const inputDescripcion = document.getElementById('input-desc');
const inputPrecio = document.getElementById('input-precio');

cargarAltaProducto = () =>{
    let outputObj = {
        "Código":inputCodigo.value,
        "Proveedor":inputProveedor.value,
        "Categoría":inputCategoria.value,
        "Nombre Producto":inputProducto.value,
        "Descripción":inputDescripcion.value,
        "Precio":inputPrecio.value,
    }
    storedArray.push(outputObj);
    localStorage.setItem('productos', JSON.stringify(storedArray));
    alert('Carga realizada correctamente.');
    window.history.go(-1);
}


cargarBotones = () =>{
    btnAlta.addEventListener('click',()=>cargarAltaProducto());
    btnCancel.addEventListener('click',()=>{window.history.go(-1);});
}

cargarBotones();