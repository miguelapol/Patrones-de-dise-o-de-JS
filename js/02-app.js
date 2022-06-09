//constructor Pattern

class Persona{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}
//tener una clase principal que contenga un constructor

//reusamos del padre al hijo
class Client extends Persona{
    constructor(nombre,email,empresa){
        super(nombre,email);
        this.empresa = empresa;
    }
}
const persona = new Persona('Juan','email@corre.com');
const cliente = new Client('Juan','apolonio1995@gmail.com','Empresa');
console.log(cliente);
//constructor Pattern 
console.log(persona);