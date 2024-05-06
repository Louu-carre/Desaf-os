const prod = ["celular", "televisor", "reloj", "auriculares", "play", "parlante"]
prod.pop()
for(let i = 0; i < prod.length; i++){
    console.log("Producto:" + (i+1) + ":" + prod [i])
}
