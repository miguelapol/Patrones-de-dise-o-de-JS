//Mediator es que haya comunicacion
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala=null;
}
Vendedor.prototype={
    oferta: (articulo,precio)=>{
        console.log(`Tenemos el siguiente articulo: ${articulo}, iniciamos con un precio ${precio}`);
    },
    vendido:comprador=>{
        console.log(`El comprador ${comprador} ha comprado el articulo`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala=null;
}
Comprador.prototype={
    oferta:(cantidad,comprador)=>{
        console.log(`El comprador ${comprador.nombre} ha ofertado ${cantidad}`);
    }
}
function Subasta() {
    let compradores = {};
    return{
        registrar:usuario=>{
            compradores[usuario.nombre]=usuario;
            usuario.sala=this;
        }
    }
    
}

const juan = new Comprador('Juan');
const pedro = new Comprador('Pedro');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();
//Tienes que registrar a los usuarios en la subasta
subasta.registrar(juan);
subasta.registrar(pedro);
subasta.registrar(vendedor);
//El vendedor ofrece un articulo


vendedor.oferta('Auto',500);

juan.oferta(100,juan);
pedro.oferta(200,pedro);

vendedor.vendido('Juan');