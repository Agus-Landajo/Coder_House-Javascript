
class Producto {

    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    contarStock(){
        if(this.stock > 0){
            this.stock = this.stock -1;
            return true;
        }
        else{
            alert("No tenemos más stock de " + this.nombre);
        }
    }

}

let producto_cama = new Producto("cama elastica", 200, 2);
let producto_sillon = new Producto("sillon", 100, 3);
let producto_silla = new Producto("silla", 80, 4);
let producto_maceta = new Producto("maceta", 20, 6);

let carrito = 0;
let contador = 0;

function elegirProducto(){
    let producto = prompt("¡Hola! ¿Qué producto te interesa comprar? (cama elastica/sillon/silla/maceta)");
    carritoPersonal(producto);
}

function carritoPersonal(producto){
    let datoTrabajado = producto.toLowerCase();

    if(datoTrabajado == producto_cama.nombre){
        
        if(producto_cama.contarStock() == true){
            carrito = carrito + producto_cama.precio;
            alert("Acabas de comprar una cama elástica por " + producto_cama.precio +" pesos");       
            contador++;
        }
       
    } else if(datoTrabajado == producto_sillon.nombre){
        if(producto_sillon.contarStock() == true){
            carrito = carrito + producto_sillon.precio;
            alert("Acabas de comprar un sillón por " + producto_sillon.precio +" pesos");
            contador++;
        }

    } else if(datoTrabajado == producto_silla.nombre){
        if(producto_silla.contarStock() == true){
            carrito = carrito + producto_silla.precio;
            alert("Acabas de comprar una silla por " + producto_silla.precio +" pesos");
            contador++;
        }

    } else if(datoTrabajado == producto_maceta.nombre){
        if(producto_maceta.contarStock() == true){
            carrito = carrito + producto_maceta.precio;
            alert("Acabas de comprar una maceta por " + producto_maceta.precio +" pesos");
            contador++;
        }

    } else{
        alert("El valor ingresado no concuerda con ninguno de nuestros productos");
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