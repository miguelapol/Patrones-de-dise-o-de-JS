//Factory
//van a compartir atributos
class InputHTML{
    constructor(type, nombre){
        this.type = type;
        this.nombre = nombre;

    }
    crearInput(){
        return `<input type="${this.type}" name="${this.nombre}"> id="${this.nombre}">`;
    }
}

class HTMLFactory{
    CreateElement(type, nombre){
        switch(type){
            case'text':
                return new InputHTML('text', nombre);
            case'tel':
                return new InputHTML('tel', nombre);
            case'email':
                return new InputHTML('email', nombre);
            default:
                return;
        }
    }
}

const elemento= new HTMLFactory();
const inputText= elemento.CreateElement('text', 'nombre');
console.log(inputText.crearInput());


const elemento2= new HTMLFactory();
const inputText2= elemento2.CreateElement('tel', 'telefono-cliente');
console.log(inputText2.crearInput());

const elemento3= new HTMLFactory();
const inputText3= elemento3.CreateElement('email', 'email-cliente');
console.log(inputText3.crearInput());