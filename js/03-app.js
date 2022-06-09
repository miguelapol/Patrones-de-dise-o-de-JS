//Singleton
//no se va permitir crear mas de una instancia de la clase
let instancia = null;
class Persona{
 constructor(nombre,email){
if(!instancia){
    this.nombre = nombre;
    this.email = email;
    instancia = this;
}else{
    return instancia;
}
 }
}

//aqui se podra crear varias personas
const persona= new Persona('Juan','juan@corre.com');
console.log(persona); 
const persona2= new Persona('Pedro','juan@corre.com');
console.log(persona2); 
//aqui veremos que ambos objetos son iguales