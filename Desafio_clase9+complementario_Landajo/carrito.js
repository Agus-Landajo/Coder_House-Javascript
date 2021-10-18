let listaCompras;
let imprimirDatos = document.getElementById("productosPrint");
let btn = document.getElementById("finalizarCompra");

//verifico que el array carrito del local storage no este vacio. Si tiene algun elemento lo traigo.
if(localStorage.getItem("carrito") == null){
    alert("El carrito esta vacio");
}else{
    listaCompras = JSON.parse(localStorage.getItem("carrito"));
}

//recorro el array del carrito de la misma manera que los productos, esta vez no muestro la opcion
//para comprar.
listaCompras.forEach(element => {
    imprimirDatos.innerHTML += `
    <div class="card col-4 mt-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${element.nombre}</h5>
      <p class="card-text">$${element.precio}</p>
    </div>
    </div>
    `
});

//esta funcion se va a ejecutar mediante un evento, recorre el array carrito y va sumando el costo de 
//cada producto a un contador. Luego se muestra el contador y se borran todos los productos del local
//storage carrito.
const finalizarCompra =() => {
    let total = 0;
    listaCompras.forEach(e =>{
        total = total + e.precio;
    })

    alert("Felicidades, realizaste la compra sin problemas! El valor de tu compra es de: $" + total);
    localStorage.removeItem("carrito");
}

//creamos un evento onclick para el boton, el cual esta referenciado por un document.getElementById.
btn.addEventListener("click", ()=>{
    finalizarCompra();
})