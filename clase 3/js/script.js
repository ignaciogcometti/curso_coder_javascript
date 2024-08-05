/* let saberEdad = (añoActual, añoNacimiento) => añoActual - añoNacimiento

console.log(saberEdad(2024,1999)) */

function suma (num1,num2) {
    return num1 + num2
}
function resta (num1,num2) {
    return num1 - num2
}
function multiplicacion (num1,num2) {
    return num1 * num2
}
function division (num1,num2) {
    return num1 % num2
}

console.log(suma(5,5));
console.log(resta(5,5));
console.log(multiplicacion(5,5));
console.log(division(5,5));

/* function saludar(nombre){
    console.log("Hola " +nombre+(" bienvenido de vuelta al mundo del codigo"));
}
saludar("grabiel"); */

let queSeComeHoy = function(dia){
    if(dia=="lunes")
    {console.log("hoy se come milanesa");}
    else if(dia=="martes")
    {console.log("hoy se come ensalada");}
    else if(dia=="miercoles")
        {console.log("hoy se come asado");}
    else if(dia=="jueves")
        {console.log("hoy se come estofado");}
    else if(dia=="viernes")
        {console.log("hoy se come guiso");}
    else if(dia=="sabado")
        {console.log("hoy se come ñoquis");}
    else if(dia=="domingo")
        {console.log("hoy se come ravioles");}
}

queSeComeHoy("viernes");

function sumarr(){
    let numero1=5;
    let resultado= numero1 + 5;

    return resultado;
}

console.log(sumarr());

/* const levantarLaPesa = function (ejercitoHoy) {
    // Check if the user exercised today.
    if (ejercitoHoy === true) {  
        // If the user exercised today, log a message.
        alert("Hoy se ejercitó fuerte");
    }else {
        alert("menudo vago de mierda");}
}

const respuesta = prompt("¿Hiciste ejercicio hoy? (si/no)");

const ejercitoHoy = respuesta.toLowerCase() === "si";


levantarLaPesa(ejercitoHoy); */

/* // Escribe una función expresada que tome un nombre y devuelva un saludo.
const saludar = function (nombre) {
    nombre = prompt("ingrese un nombre");
    alert("Muy buenos dias " + nombre);
}
saludar(); */

// Usa una función anónima como un callback para el método forEach.
const numeros = [1, 2, 3, 4];
numeros.forEach(function(numero) {
    console.log(numero * 2);
}); // Debería imprimir 2, 4, 6, 

// Escribe una función flecha que tome un número y devuelva su cuadrado.
let devolverCuadrado=(num1)=>num1*num1

console.log(devolverCuadrado(5));

// Demuestra la diferencia entre el ámbito global y local.
const dias = function(){
    let finde = 2;
    let semana = 5;
    return semana + finde;
}
console.log(dias());

// las variables finde y semana pertenecen solo a un scope local dentro de la funcion dias

let mes = 30;

const diasDelMes = function(){
    console.log("Un mes tiene "+ mes +" dias");
}

diasDelMes();
// En este caso la variable mes esta fuera de la funcion, ya fue inicilizada por lo cual dentro de una funcion que puse despues llamada diaDelMes puedo llamarla, ya que tiene un scope global

const domingoAmiguero = function(amigo){
    switch(amigo){
        case "cristian":
            return alert("Nos fuimos a tomar unas birras a afiche");
            break;
        case "nahir":
            return alert("Nos fuimos a la capelina a tomar cafe");
            break;
        case "micaela":
            return alert("Nos a ver deadpool 3 de nuevo");
            break;
        case "juan":
            return alert("Nos a una plaza a tomar mate");
            break;
        default:
            return alert("No reconocí al amigo que mencionaste");
    }   
}
// Solicitar al usuario que ingrese el nombre del amigo
let meViCon = prompt("¿Con qué amigo te viste? (cristian, nahir, micaela, juan)");

// Llamar a la función con el valor ingresado por el usuario
domingoAmiguero(meViCon);