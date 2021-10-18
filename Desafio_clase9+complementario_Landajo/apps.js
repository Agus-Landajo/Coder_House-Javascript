//creo la clase para los productos
class Producto {

    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    comprarProducto(){
        this.stock--;
        carrito = carrito + this.precio;
        alert("Acabas de comprar 1 " + this.nombre + " por " + this.precio +" pesos");       
    }
}
//inicializo un array que va a contener objetos de la clase Producto
let listaProductos = [];

listaProductos.push( new Producto("cama elastica", 200, 2));
listaProductos.push( new Producto("sillon", 100, 3));
listaProductos.push( new Producto("silla", 80, 4));
listaProductos.push( new Producto("maceta", 20, 6));
listaProductos.push( new Producto("reposera", 150, 2));
listaProductos.push( new Producto("kayak", 2200, 1));
listaProductos.push( new Producto("organizador", 50, 4));
listaProductos.push( new Producto("mesa ping pong", 500, 2));
listaProductos.push( new Producto("mesa ratona", 60, 7));
listaProductos.push( new Producto("regadora", 40, 4));

//Mando la lista al local storage en formato JSON
localStorage.setItem("productosTienda",JSON.stringify(listaProductos));

//creo una variable que trae los elementos que se encuentren en el local storage
let mostrarProductos = JSON.parse(localStorage.getItem("productosTienda"));

//accedo a un ID de mi index.html, luego recorro el array del local storage y para cada objeto creo
//una card. Utilizo indexOf para tener en una variable las posiciones del array.
let imprimirDatos = document.getElementById("productosPrint");
mostrarProductos.forEach(element => {
    let index = mostrarProductos.indexOf(element);

    imprimirDatos.innerHTML += `
    <div class="card col-4 mt-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${element.nombre}</h5>
      <p class="card-text">$${element.precio}</p>
      <button class="card-link" onclick="comprar(${index})">añadir al carro</button>
    </div>
    </div>
    `
});

//Hay un evento onclick en el boton insertado por innerHTML que activa esta funcion.
//Verifico si mi nuevo array carrito tiene objetos o no en el local storage. Si no tiene queda vacio,
//si tiene elementos los traigo con getItem. Sea cual sea el caso, al finalizar pusheo el objeto
//seleccionado al array carrito.
const comprar =(index) =>{
    let carrito;
    if(localStorage.getItem("carrito") == null){
        carrito = [];   
    }else{
        carrito = JSON.parse(localStorage.getItem("carrito"));
    }

    carrito.push(mostrarProductos[index]);
    alert(`Se añadio 1 ${mostrarProductos[index].nombre} al carrito`);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
