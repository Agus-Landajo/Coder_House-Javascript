
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


let carroDeCompras = [];

let carrito = 0;
let comprobar = false;

function elegirProducto(){
    let producto = prompt("¡Hola! ¿Qué producto te interesa comprar? (cama elastica/sillon/silla/maceta/reposera/kayak/organizador/mesa ping pong/mesa ratona/regadora)");
    carritoPersonal(producto);
}



function carritoPersonal(producto){
    let datoTrabajado = producto.toLowerCase();
    
    for(let i = 0; i <listaProductos.length; i++){

        if(datoTrabajado == listaProductos[i].nombre){
            if(listaProductos[i].stock <= 0){
                alert("No hay más stock de " + listaProductos[i].nombre);
                comprobar = true;
            }else{  
                listaProductos[i].comprarProducto();
                carroDeCompras.push(listaProductos[i].nombre);
                comprobar = true;

                
            }
        }else if(i == listaProductos.length -1 && comprobar == false){
            alert("El producto ingresado no es válido.")
            break;
        }
    }
    comprobar = false;
    preguntarOtraVez();

}
function preguntarOtraVez() {
    let otroProducto = prompt("¿Te gustaría comprar otro producto? (si/no)");
    
    if(otroProducto == "si"){
        elegirProducto();
    } else if(otroProducto== "no"){
        console.log(`Compraste ${carroDeCompras.length} productos. En total el monto a abonar es de: ${carrito} pesos`);
        console.log(`Elementos en tu Carrito de compras: ${carroDeCompras}`);
    } else{
        alert("Disculpa, no te llegue a entender");
        preguntarOtraVez();
    }
}

elegirProducto();