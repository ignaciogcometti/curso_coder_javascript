////                                                                                  
//arrays

const familiaresPrincipales = ['Alejandra','Oscar','Agustina'];
const familiaresSecundarios = ['Fernanda', 'Pablo', 'Sara', 'Francisco'];
const familiaresLejanos = ['Marta', 'Piqui', 'Elias'];

console.log(familiaresPrincipales[0]);
console.log(familiaresSecundarios[1]);
console.log(familiaresLejanos[2]);

console.table(familiaresPrincipales);
////                                                                                  
/// ARRAYS METODOS

//METODO 0
// Metodo length hace que abarce toda la longitud del array
//nos mostraria por consola la cantidad total de la longitud del array. Y en un ciclo para reccorer su totalidad

console.log(familiaresSecundarios.length);

for (let i = 0; i < familiaresLejanos.length; i ++) {
    console.log(familiaresLejanos[i]);
}

//METODO 1
// Metodo push() agrega un elemento al final de un array

const villanos = ["Joker", "Letterface", "Jason", "Freddy Kruger"];

villanos.push("Depredador");

for (let i = 0; i < villanos.length; i ++) {
    console.log(villanos[i]);
}

//METODO 2
// Metodo unshift() agrega un elemento al inicio del array

const firstAvengers = ["Iron Man", "Hulk", "Black Widow", "Hawkeye"];

firstAvengers.unshift("Capitan America");

for (let i = 0; i < firstAvengers.length; i ++) {
    console.log(firstAvengers[i]);
}

//METODO 3
// Metodo shift() quita el primer elemento al inicio del array

const xmen = ["Wolverine", "ProfesorX", "Cyclops"];

xmen.shift();

for (let i = 0; i < xmen.length; i ++) {
    console.log(xmen[i]);
}

//METODO 4
// Metodo pop() quita el ultimo elemento del array

const xforce = ["Domino", "Cable", "Deadpool", "Peter"];

xforce.pop();

for (let i = 0; i < xforce.length; i ++) {
    console.log(xforce[i]);
}

//METODO 5
// Metodo join() genera una string con todos los elementos del array separados con el valor que le pasemos por parametro

const illuminati = ["Iron Man", "Doctor Strange", "Reed Richards", "Black Panter", "ProfesorX"];

console.log(illuminati.join(", "));

//METODO 6
// Metodo indexOf() permite obtener el indice de un elemento en un Array

//si hay nos devuelve su indice y si no existe nos devuelve un -1
const enMiHeladeraHay = ["Pasta", "Carne", "Pollo", "Chimichangas"];

console.log(enMiHeladeraHay.indexOf("Pollo"));
console.log(enMiHeladeraHay.indexOf("Pescado"));

//METODO 7
// Metodo includes() permite averiguar si el elemento indicado por parametro existe dentro del array 

// Retornando siempre un valor booleano
const enMiMochilaHay = ["Cepillo de dientes", "Botella de agua", "Buzo"];

console.log(enMiMochilaHay.indexOf("Buzo"));
console.log(enMiMochilaHay.indexOf("Un millon de dolares"));

//METODO 8
// Metodo sort() sirve para ordenar el array alfabeticamente

const alacena = ["fideo", "pasta base", "atun", "salmon"];
alacena.sort();

for (i=0;i<alacena.length;i++){console.log(alacena[i])
} 

//METODO 9
// Metodo reverse() sirve para invertir el orden de los elementos del array
const placar = ["buzo", "campera", "remeras"];
placar.reverse();

for (i=0;i<placar.length;i++){console.log(placar[i])
}

/// combinando metodos, reverse y sort
placar.reverse().sort();
for (i=0;i<placar.length;i++){console.log(placar[i])
}
////                                                                                  
////
//OBJETOS LITERALES

const estudiante = {
    nombre: "ignacio",
    edad: 24,
    luchador: true,
}


// Recorrer con un ciclo for of
// ciclo for(variable del objeto literal of y el objeto literal)
const profesores = [
    {id: 1, nombre: "Pablo"},
    {id: 2, nombre: "Juan"},
    {id: 3, nombre: "Oscar"},
]

for (profesor of profesores) {
    console.log(profesor)
}
////                                                                                  
///

// ARRAYS DE OBJETOS

const instrumento = {id:1, nombre:"guitarra"}

const instrumentos = [instrumento , {id:2, nombre:"bateria"}]
instrumentos.push({id:3, nombre:"bajo"})

//

/* const cartaDeTragos = [];

const agregarTragos = () => {
    const id = prompt("ingrese el id del trago");
    const nombre = prompt("ingrese el nombre del trago");

    const trago = {id: id, nombre: nombre};
    cartaDeTragos.push(trago);
}

agregarTragos() */

////                                                                                  
/// practicas

//array

//Arrays tipo number, strings, booleans

//Arrays de tipo dato number
const años = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
const meses = [1,2,3,4,5,6,7,8,9,10,11,12];
const dias = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const semana = [1,2,3,4,5,6,7];
const finDeSemana = [1,2];
const diasLibres = [1,2];
const SemanaLaboral = [1,2,3,4,5];
const familiaPrincipal = [1,2,3];
const diasDeVacaciones = [1,2,3,4,5,6,7,8,9,10,11,12];
const mascotas = [1,2];

//Arrays de tipo string

let familia = ["Alejandra", "Oscar", "Agustina"];
let mascotasCompañeros = ["Felix", "Rotten"];
let cursosCoder = ["Desarrollo Web", "Javascript"];
let recitalesPorIr = ["BabyMetal", "Slipknot", "Bring Me The Horizon"];
let compañerasTrabajo = ["Romina", "Lola", "Kate", "Gise"];
let localidadesVividas = ["Beccar", "Boedo"];
let trabajosAnteriores = ["La Farola", "1000 Rosa Negra", "BierHaus", "Floreria Atlantico", "El Fondin", "Picaron"];
let mejoresAmigos = ["Cristian", "Agustin", "Juan", "Ivan"];
let proximasVacacionesEn = ["Uruguay", "Brasil", "Cordoba", "Bariloche", "Salta", "Mendoza"];
let animesFavoritos = ["Naruto", "Jujutsu Kaisen", "Kimetsu No Yaiba", "Evangelion", "Full Metal Alchemist"];

//Arrays de tipo booleans 

const buenAño = [false, true, false, true];
const buenTrabajo = [false, false, true];
const buenaVida = [true, true, true, true, true];
const vacacionesEsteAño = [false, true];
const torneoAjedrez = [true];

//Arrays de Arrays

let heladera = [
    ["lacteos", "huevos", "leche"],
    ["carnes", "rib eye", "t-bone", "achuras"],
    ["yogurs", "vainilla", "frutilla", "banana", "cerezas"]
];
const ropero = [
    ["zapatillas", "nike", "adidas", "Puma", "Topper"]
    ["camperas", "prada", "fendi", "valentino"]
];
let vecinos = [
    ["Rosa", "estatura media", "gritona"],
    ["Nahuel", "muy petizo", "calladito"],
    ["Valentina", "muy alta", "voz angelical"]
];

////                                                                                  

///Objeto Literal 

let miCasa ={localidad:"beccar",
            altura:765,
            color:"roja",
            ambientes:2,
            alquilada:true,};

const argentina = { capital: "Buenos Aires",
                    provincias: 23,
                    presidente: "Javier Milei",
                    mejorPaisDelMundo: true,}

let trabajo = { nombre:"Picaron",
                lugar: "Chacarita - Dorrego",
                buenaPropina: true,
                dueño:"Maximiliano Rossi",
                altura:866,};

const computadora ={sistema:"Windows 10",
                    sitemaDeBits:64,
                    procesador:7,
                    pcGamer:true,
                    refrigeracionLiquida:false,};

let baño ={tieneBañera:false,
            tieneEspejos:1,
            tieneAguaCaliente: true,
            estilo: "Industrial",
};

const bici={ruedas:2,
            velocidad:"intermedia",
            precioDolarizado:600,
            color:"Platinada"};

let   gatoFelix =  {mascotaPreferida: true,
                    color:"Blanco con manchas naranjas",
                    patas:4,
                    pelaje:"Suave",};

const zapatillasNuevas={estadoNuevas: true,
                        marca:"Puma",
                        color:"Cromadas",
                        CantidadCompradas:1,};

let  blink182 ={members: 3,
                activeBand:true,
                yearBorn: 1992,
                style: "pop-punk",
};

const ignacio = {triunfador: true,
                apordo: "nachoman",
                segundoNombre:"Gabriel",
                edad:24,
                colorOjos: "Marrones",
                contextura:"Alto y macizo",
                miedoAlExito:false,};

////                                                                        
/// Array de Objetos 

let guardaropas = [
                    {prenda:campera, cantidad:4},
                    {prenda:buzo, cantidad:2},
                    {prenda:zapatilla, cantidad:3},
];

let tareas = [
    { id: 1, descripcion: "Lavar los platos", completado: true },
    { id: 2, descripcion: "Limpiar la casa", completado: false },
    { id: 3, descripcion: "Hacer la compra", completado: false },
    { id: 4, descripcion: "Cortar el césped", completado: true }
];

let libros = [
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943 },
    { titulo: "1984", autor: "George Orwell", año: 1949 }
];

const empleados = [
    { nombre: "Carlos", puesto: "Desarrollador", salario: 60000 },
    { nombre: "Lucía", puesto: "Diseñadora", salario: 55000 },
    { nombre: "Pedro", puesto: "Gerente de Proyecto", salario: 70000 },
    { nombre: "Ana", puesto: "Desarrolladora", salario: 62000 }
];

const ventas = [
    { producto: "Tablet", cantidad: 5, precio: 200 },
    { producto: "Laptop", cantidad: 2, precio: 1000 },
    { producto: "Smartphone", cantidad: 10, precio: 500 },
    { producto: "Monitor", cantidad: 3, precio: 150 }
]

const peliculas = [
    { titulo: "El Padrino", director: "Francis Ford Coppola", año: 1972 },
    { titulo: "Pulp Fiction", director: "Quentin Tarantino", año: 1994 },
    { titulo: "El Caballero Oscuro", director: "Christopher Nolan", año: 2008 },
    { titulo: "Inception", director: "Christopher Nolan", año: 2010 }
]

const asistencia = [
    { nombre: "Juan", presente: true },
    { nombre: "Marta", presente: false },
    { nombre: "Luis", presente: true },
    { nombre: "Carla", presente: true }
]

const menu = [
    { plato: "Pasta", precio: 12000 },
    { plato: "Pizza", precio: 1000 },
    { plato: "Ensalada", precio: 8000},
    { plato: "Sopa", precio: 5000 }
]

const inventario = [
    { producto: "Silla", precio: 45, cantidad: 20 },
    { producto: "Mesa", precio: 100, cantidad: 10 },
    { producto: "Lámpara", precio: 30, cantidad: 50 },
    { producto: "Sofá", precio: 500, cantidad: 5 }
]

let planEstudio = [
    {curso: "Desarrollo Web", mesesDuracion:4, precio:20000},
    {curso: "Javascript", mesesDuracion:3, precio:60000},
    {curso: "React", mesesDuracion:2, precio:40000},
]