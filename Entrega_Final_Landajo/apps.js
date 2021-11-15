//creo la clase para los productos
class Producto {

    constructor(id,nombre,precio,stock,imagen,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }

    cantidad = 0;
}

let total = 0;

//inicializo un array que va a contener objetos de la clase Producto
let listaProductos = [];


listaProductos.push( new Producto(1,"Cama Elastica", 200, 2, "./imagenes/camaelastica.jpeg",0));
listaProductos.push( new Producto(2,"Sillon Miami", 100, 3, "./imagenes/miami.jpeg",0));
listaProductos.push( new Producto(3,"Silla Eames", 80, 4, "./imagenes/eames.jpeg",0));
listaProductos.push( new Producto(4,"Sillon Skarpo", 20, 6, "./imagenes/skarpo.jpeg",0));
listaProductos.push( new Producto(5,"Reposera Toronto", 150, 2, "./imagenes/toronto.jpeg",0));
listaProductos.push( new Producto(6,"Cesto", 2200, 1, "./imagenes/cesto.jpg",0));
listaProductos.push( new Producto(7,"Set Organizador", 50, 4, "./imagenes/cajonera.jpeg",0));
listaProductos.push( new Producto(8,"Mesa Timbu", 60, 7, "./imagenes/timbu.jpeg",0));
listaProductos.push( new Producto(9,"Regadora", 40, 4, "./imagenes/regadora.jpeg",0));

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

    //chequeo si tengo stock del producto en cuestion.
    if(mostrarProductos[index].stock == 0){
        alert("Lo sentimos, actualmente no tenemos stock de ese producto");
    }else{
    //si tengo stock, actualizo la cantidad.
        mostrarProductos[index].stock--;
        mostrarProductos[index].cantidad++;
    //esta variable confirma si existe algun objeto comprado que ya estaba en el carrito
        let nombreIgual = false;
    //traigo el array de carritos y comparo si esta nulo o no
        carrito = JSON.parse(localStorage.getItem("carrito"));

        if(carrito != null){
            //este for recorre el array carrito y compara si ya existe un producto igual al que se 
            //esta comprando, en ese caso le aumenta uno a la cantidad, sino pushea el nuevo objeto
            //al carrito.
            
            for(i = 0; i < carrito.length; i++){
                if(carrito[i].id == mostrarProductos[index].id){
                    carrito[i].cantidad ++;
                    localStorage.setItem("carrito",JSON.stringify(carrito));
                    alert(`Se añadio 1 ${mostrarProductos[index].nombre} al carrito`);
                    nombreIgual = true;
                }
            }
            if(nombreIgual == false){
                carrito.push(mostrarProductos[index]);
                localStorage.setItem("carrito",JSON.stringify(carrito));
                alert(`Se añadio 1 ${mostrarProductos[index].nombre} al carrito`);
            }

        } else{
            carrito = [];  
            carrito.push(mostrarProductos[index]);
            localStorage.setItem("carrito",JSON.stringify(carrito));
            alert(`Se añadio 1 ${mostrarProductos[index].nombre} al carrito`);
        }

    }
}






