//NameSpace
const restauranteApp={};

restauranteApp.platillos=[
    {
        platillo:'Pizza',
        precio:10
    },

    {
        platillo:'Hamburguesa',
        precio:20
    },
    {
        platillo:'Tacos',
        precio:30
    }
];

//funciones

restauranteApp.funciones={
    mostrarMenu: platillos=>{
        console.log(`Bienvenidos a nuestro menu`);
        platillos.forEach((platillo,index)=>{
            console.log(`${index}: ${platillo.platillo} - ${platillo.precio}`);
        })
    },
    ordenar:id=>{
        console.log(`Ordenando platillo ${restauranteApp.platillos[id].platillo}`);
    },
    agregarPlatillo:(platillo,precio)=>{
       const nuevo={
              platillo, 
            precio
       }
         restauranteApp.platillos.push(nuevo);
    }
}

const{platillos}=restauranteApp;

restauranteApp.funciones.mostrarMenu(platillos);
restauranteApp.funciones.ordenar(1);
restauranteApp.funciones.agregarPlatillo('Milanesa',10);
restauranteApp.funciones.mostrarMenu(platillos);
