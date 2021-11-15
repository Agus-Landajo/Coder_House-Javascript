let listaCompras;
let imprimirDatos = document.getElementById("productosPrintCarro");

//defino una constante para traer la direccion url de la api, en este caso son datos curiosos y chistes
const url = 'https://geek-jokes.sameerkumar.website/api?format=json';
//creo un boton 
$("#chistes").append('<button id = "mostrarChiste"> Mostrar </button>');
//estilo el boton y el cuadro de texto
$("#mostrarChiste").css("background-color","lightbrown");
$("#mostrarChiste").css("padding","10px");
//esta es la funcion que se activa al hacer click en el boton, llama al objeto joke, se van 
//superponiendo con html()
$("#mostrarChiste").click(() => {

    $.get(url, (respuesta,estado)=>{
      if(estado == "success"){    
        $("#respuesta").html(`<p>${respuesta.joke} </p>`);
      }
    })
})



  //verifico que el array carrito del local storage no este vacio. Si tiene algun elemento lo traigo.
if(localStorage.getItem("carrito") == null){
  alert("El carrito esta vacio");
}else{
  listaCompras = JSON.parse(localStorage.getItem("carrito"));
}

//recorro el array del carrito de la misma manera que los productos, esta vez no muestro la opcion
//para comprar. 
imprimirDatos.innerHTML += `
<div class ="row m-3 pb-0" style="align-items:center; border-bottom: 1px black solid;" >
  <div class="col-sm-6">
    <p>Producto</p>
  </div>
  <div class="col-sm-3">
    <p>Cantidad</p>
  </div>
  <div class="col-sm-3">
    <p>Precio</p>
  </div>
</div>
`
listaCompras.forEach(element => {
    imprimirDatos.innerHTML += `
    <div class="row m-3 pb-3" style="align-items:center; border-bottom: 1px black solid;" >
      <div class="col-sm-3">
      <img src=${element.imagen}  class="card-img-top" alt=${element.nombre}>
      </div>
      <div class="col-sm-3">
        <h4>${element.nombre}</h4>
      </div>
      <div class="col-sm-3">
        <h4>${element.cantidad}</h4>
      </div>
      <div class="col-sm-3">
        <p class="card-text">$${element.precio * element.cantidad}</p>
      </div>  
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


//creamos un evento onclick para el boton mediante JQuery
$("#finalizarCompra").on("click", ()=>{
  finalizarCompra();
})








