let listaCompras;
let imprimirDatos = document.getElementById("productosPrintCarro");

const url = 'https://geek-jokes.sameerkumar.website/api?format=json';

$("#chistes").append('<button id = "mostrarChiste"> Mostrar </button>');
$("#mostrarChiste").css("background-color","lightbrown");
$("#mostrarChiste").css("padding","7px");
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
listaCompras.forEach(element => {
  imprimirDatos.innerHTML += `
  
  <div class="row m-3 pb-3" style="align-items:center; border-bottom: 1px black solid;" >
    <div class="col-sm-4">
    <img src=${element.imagen}  class="card-img-top" alt=${element.nombre}>
    </div>
    <div class="col-sm-4">
      <h4>${element.nombre}</h4>
    </div>
    <div class="col-sm-4">
      <p class="card-text">$${element.precio}</p>
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








