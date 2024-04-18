let prod1 = "Celular A55 5g"
let precioU = 55000
let cantidad

alert("Hola, estas a punto de comprar un celular y el modelo es: "+ prod1 + " y su valor es de: "+precioU)
let cantidadDeseada = prompt("Ingrese la cantidad de celulares que desea comprar:")

const costoTotal = precioU * cantidadDeseada

alert("Usted compró"+ cantidadDeseada +" "+prod1+ ". "+"El costo total es: $" + costoTotal)