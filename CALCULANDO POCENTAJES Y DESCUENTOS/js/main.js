
function calcularPrecioConPorcentaje(precio,descuento){
    const calcularPorcentaje = 100 - descuento;
    const calcularPrecio = (precio * calcularPorcentaje /100);
    return calcularPrecio
}

function calcularDescuentoProducto(){
    const precioP = document.getElementById("labelPrecio");
    const descuentoP = document.getElementById("labelDescuento");

    const valoresPrecio = precioP.value;
    const valoresDescuento = descuentoP.value;
    
    const calculoDeFuncion = calcularPrecioConPorcentaje(valoresPrecio,valoresDescuento);
  
    const resultadoDelDescuento = document.getElementById("resultadoPrecio");
    resultadoDelDescuento.innerText = 'El precio con el descuento es: $' + calculoDeFuncion

}