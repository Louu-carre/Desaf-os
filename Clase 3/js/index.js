let nombreProducto = "Margaritas";
let precioUnitario = 2500;
let cantidadDeseada = parseInt(prompt("Ingrese la cantidad de "  + nombreProducto + " que desea comprar:"))
let costoTotalSinDescuentos = precioUnitario * cantidadDeseada
if(cantidadDeseada >= 5){
    costoTotalSinDescuentos *= 0.9
}

Swal.fire(`El costo total es ${cantidadDeseada} ${nombreProducto} es: $${costoTotalSinDescuentos}`)

