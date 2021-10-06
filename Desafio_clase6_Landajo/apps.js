
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
        contador++;
    }
}

let listaProductos = [];

listaProductos.push( new Producto("cama elastica", 200, 2));
listaProductos.push( new Producto("sillon", 100, 3));
listaProductos.push( new Producto("silla", 80, 4));
listaProductos.push( new Producto("maceta", 20, 6));

let carrito = 0;
let contador = 0;

function elegirProducto(){
    let producto = prompt("¡Hola! ¿Qué producto te interesa comprar? (cama elastica/sillon/silla/maceta)");
    carritoPersonal(producto);
}



function carritoPersonal(producto){
    let datoTrabajado = producto.toLowerCase();
    
    for(let i = 0; i <listaProductos.length; i++){

        if(datoTrabajado == listaProductos[i].nombre){
            if(listaProductos[i].stock <= 0){
                alert("No hay más stock de " + listaProductos[i].nombre);
            }else{  
                listaProductos[i].comprarProducto();
                
            }
        }
    }
    preguntarOtraVez();

}
function preguntarOtraVez() {
    let otroProducto = prompt("¿Te gustaría comprar otro producto? (si/no)");
    
    if(otroProducto == "si"){
        elegirProducto();
    } else if(otroProducto== "no"){
        console.log(`Compraste ${contador} productos. En total el monto a abonar es de: ${carrito} pesos`);
    } else{
        alert("Disculpa, no te llegue a entender");
        preguntarOtraVez();
    }
}

elegirProducto();