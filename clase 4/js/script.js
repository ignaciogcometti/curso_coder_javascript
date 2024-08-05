//arrays

const familiaresPrincipales = ['Alejandra','Oscar','Agustina'];
const familiaresSecundarios = ['Fernanda', 'Pablo', 'Sara', 'Francisco'];
const familiaresLejanos = ['Marta', 'Piqui', 'Elias'];

console.log(familiaresPrincipales[0]);
console.log(familiaresSecundarios[1]);
console.log(familiaresLejanos[2]);

console.table(familiaresPrincipales);

console.log(familiaresSecundarios.length);

for (let i = 0; i < familiaresLejanos.length; i ++) {
    console.log(familiaresLejanos[i]);
}

// ARRAYS METODOS

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

///

// ARRAYS DE OBJETOS

const instrumento = {id:1, nombre:"guitarra"}

const instrumentos = [instrumento , {id:2, nombre:"bateria"}]
instrumentos.push({id:3, nombre:"bajo"})

//

const cartaDeTragos = [];

const agregarTragos = () => {
    const id = prompt("ingrese el id del trago");
    const nombre = prompt("ingrese el nombre del trago");

    const trago = {id: id, nombre: nombre};
    cartaDeTragos.push(trago);
}

agregarTragos()
