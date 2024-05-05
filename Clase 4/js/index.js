function sumarProductos(precioUnitario , cantidadDeseada){
 let totalGastado = precioUnitario * cantidadDeseada;
return totalGastado;
}
let precioUnitario = 15000;
let cantidadDeseada = 8;
let totalCompra = sumarProductos (precioUnitario, cantidadDeseada);
console.log('El total gastado en el producto es: $' + totalCompra)