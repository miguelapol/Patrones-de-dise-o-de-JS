//Mixin Pattern
class Persona{
    constructor(nombre,email){
        this.nombre=nombre;
        this.email=email;
    }
}
class Cliente{
    constructor(nombre,email,telefono){
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
    }
}
const funcionesPersona={
    mostrarInformation(){
        console.log(`Nombre: ${this.nombre} Email: ${this.email} telefono: ${this.telefono}`);
    },
    mostrarNombre(){
        console.log(`Nombre: ${this.nombre}`);
    }
}

//añadir funcionesPersona a ala clase Persona 
Object.assign(Persona.prototype,funcionesPersona);
Object.assign(Cliente.prototype,funcionesPersona);

const cliente= new Persona('Pedro','correo@gmail.com');
console.log(cliente);
cliente.mostrarInformation();
cliente.mostrarNombre();

const cliente2= new Cliente('Pedro','correo@gmail.com','123456789');
console.log(cliente2);
cliente2.mostrarInformation();