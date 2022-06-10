//module Patternsddd
// const mostrarCliente= nombre=>{
//     console.log(nombre);
// }
// export default mostrarCliente;

//la anterior forma de escribir era la siguiente 
const modulo1=(function() {
    const nombre='Pedro';
    function hola() {
        console.log(nombre);    
    }
    return{
        nombre,
        hola
    }
})();