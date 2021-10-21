//creo la clase para los productos
class Producto {

    constructor(nombre,precio,stock,imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }

    comprarProducto(){
        this.stock--;
        carrito = carrito + this.precio;
        alert("Acabas de comprar 1 " + this.nombre + " por " + this.precio +" pesos");       
    }
}
//inicializo un array que va a contener objetos de la clase Producto
let listaProductos = [];

listaProductos.push( new Producto("Cama Elastica", 200, 2, "./imagenes/camaelastica.jpeg"));
listaProductos.push( new Producto("Sillon Miami", 100, 3, "./imagenes/miami.jpeg"));
listaProductos.push( new Producto("Silla Eames", 80, 4, "./imagenes/eames.jpeg"));
listaProductos.push( new Producto("Sillon Skarpo", 20, 6, "./imagenes/skarpo.jpeg"));
listaProductos.push( new Producto("Reposera Toronto", 150, 2, "./imagenes/toronto.jpeg"));
listaProductos.push( new Producto("Cesto", 2200, 1, "./imagenes/cesto.jpg"));
listaProductos.push( new Producto("Set Organizador", 50, 4, "./imagenes/cajonera.jpeg"));
listaProductos.push( new Producto("Mesa Timbu", 60, 7, "./imagenes/timbu.jpeg"));
listaProductos.push( new Producto("Regadora", 40, 4, "./imagenes/regadora.jpeg"));

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
    <div class="col-md-4 mt-3">
              <div class="card h-100 border-secondary">
                <img src=${element.imagen}  class="card-img-top" alt=${element.nombre}>
                <div class="card-body">
                  <h5 class="card-title">${element.nombre}</h5>
                  <p class="card-text">$${element.precio}</p>
                  <button class="btn btn-outline-dark" type="button" onclick="comprar(${index})">Añadir al carro</button>
                </div>
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
    //chequeo si tengo stock del producto en cuestion.
    if(mostrarProductos[index].stock == 0){
        alert("Lo sentimos, actualmente no tenemos stock de ese producto");
    }else{
        mostrarProductos[index].stock--;
        carrito.push(mostrarProductos[index]);
        alert(`Se añadio 1 ${mostrarProductos[index].nombre} al carrito`);
        localStorage.setItem("carrito",JSON.stringify(carrito));

    }
}
