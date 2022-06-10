//Mixin Pattern
class Persona{
    constructor(nombre,email){
        this.nombre=nombre;
        this.email=email;
    }
}

const funcionesPersona={
    mostrarInformation(){
        console.log(`Nombre: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Nombre: ${this.nombre}`);
    }
}

//añadir funcionesPersona a ala clase Persona 
Object.assign(Persona.prototype,funcionesPersona);

const cliente= new Persona('Pedro','correo@gmail.com');
console.log(cliente);
cliente.mostrarInformation();
cliente.mostrarNombre();