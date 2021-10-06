
class Personas {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

let listaPersonas = [];

listaPersonas.push (new Personas("Juan", 20));
listaPersonas.push (new Personas("Maria", 37));
listaPersonas.push (new Personas("Pepe", 12));
listaPersonas.push (new Personas("Carlos", 50));
listaPersonas.push (new Personas("Beatriz", 72));
listaPersonas.push (new Personas("Alba", 30));
listaPersonas.push (new Personas("Mirtha", 140));
listaPersonas.push (new Personas("Raul", 65));

const ordenarAlfabeticamente = () => {
    listaPersonas.sort((a,b) => {

        if(a.nombre >b.nombre){
            return 1;
        }                               
        if(a.nombre <b.nombre){
            return -1;
        }
        else{
            return 0;
        }  
    })
    console.log(listaPersonas);
}

const ordenarMenorAMayor = () => {
    listaPersonas.sort((a,b) => {

        if(a.edad >b.edad){
            return 1;
        }                               
        if(a.edad <b.edad){
            return -1;
        }
        else{
            return 0;
        }  
    })
    console.log(listaPersonas);
}

let decision = prompt("Hola! Como te gustaría ordenar la lista? (nombre/edad)");

if(decision == "nombre"){
    ordenarAlfabeticamente();
}else if(decision == "edad"){
    ordenarMenorAMayor();
}else {
    alert("El valor ingresado no es válido.")
}