let estudiar = "programar"; 

// let estancar = "ver solo videos";


/* un ejemplo de un if solo*/ 
if (estudiar == "programar"){
    console.warn("estas aprendiendo programando");    
}

/* un ejemplo de un if y un else solo*/ 
if (estudiar == "programar"){
    console.warn("estas aprendiendo programando");    
}else{
    console.log("estas en el loop de solo ver videos y no ejercitar");
}


/* 
let edadPG13 = 13;
let edadPG16 = 16;
let edadPGR = 18;
let deadpool = edadPGR;

let miEdad = 15

if(edadPG13 >= 13){
    console.log("podes ingresara ver peliculas PG-13");
}else if(edadPG16>= 16){
    console.log("podes ingresara ver peliculas PG-16");
}else if(edadPG18>= 18){
    console.log("podes ingresara ver peliculas PG-R");
} else { //
    }

*/

/* let lenguajeRequerido = "javascript";
let idiomaRequerido = "frances";

if(((lenguajeRequerido=="javascript")&&(idiomaRequerido=="ingles"))||(idiomaRequerido=="frnaces") ) {
    console.log("puedes acceder al puest");
}else{
    console.warn("debes cumplir al menos uno de los requisitos")
}

// */
//primero declaras y despues pones el condicional

/* let entrada = prompt("ingrese pass");
let pass="js1234";
if (entrada == "js1234"){
    //el usuario ingresa "js1234"
} else {
    alert("Contraseña incorrecta");
} */

/* if (entrada == "js1234"){
    let entrada=prompt("ingrese pass");
    let pass="js1234"
    //El usuario ingresa "js1234"
    }else {
        alert("contraseña incorrecta");
    } */


/* //ejercicio 1
// Solicitar la respuesta del usuario sobre el clima
const respuesta = prompt("¿Cómo está el clima? (lloviendo/soleado)");

// Determinar el mensaje a mostrar según la respuesta del usuario
if (respuesta === "lloviendo") {
    console.log("Lleva paraguas");
} else if (respuesta === "soleado") {
    console.log("No olvides tus shorts");
} else {
    console.log("No entiendo tu respuesta. Por favor, responde con 'lloviendo' o 'soleado'.");
} */

/* //ejercicio 2
const respuesta = prompt("¿Cometiste un delito? (si/no)");

// Determinar el mensaje a mostrar según la respuesta del usuario
if (respuesta === "si") {
    console.log("Iras a la cárcel");
} else if (respuesta === "no") {
    console.log("Puedes ir a casa");
} else if (respuesta === "no se") {
    console.log("No te pases de vivo");
}
    else {
    console.log("No entiendo tu respuesta. Por favor, responde con 'si' o 'no'.");
} */


/* //ejercicio 3
// Solicitar la cantidad de dinero que tiene el usuario
const dinero = prompt("¿Cuánto dinero tienes?: ");

// Determinar el mensaje a mostrar según la cantidad de dinero
if (dinero <= 20) {
    console.log("Te puedo ofrecer 2 caramelos");
} else if (dinero >= 21 && dinero <= 49) {
    console.log("Estas cerca, pero no puedo fiarte, vuelve mañana.");
} else if (dinero >= 50) {
    console.log("Aquí tienes tus figuritas del mundial");
} else {
    console.log("Por favor, ingresa una cantidad válida.");
} */

/* const edad = promt("¿cuantos años tenes?");

if (edad <= 4) {
    console.log("Viviste un mundial");
} else if (edad >= 4 && edad <= 8) {
    console.log("Viviste dos mundiales");
}else if (edad >= 8 && edad <= 12) {
    console.log("Viviste tres mundiales");
}else if (edad >= 12 && edad <= 16) {
    console.log("Viviste cuatro mundiales");
}else if (edad >= 16 && edad <= 20) {
    console.log ("Viviste seis mundiales");
} */

/* 
for (let i = 0; i < 28 ; i = i+4) {
    console.log("si cumplo cada 4 años tonces mi edad va siendo " + i);
} */



/* let iterar =true
while(iterar == true){
    console.log("Imprimo en consola")
    iterar = confirm("desea seguir iterando?")
} */

/* for (let i=24; i>0; i--){
console.log("tengo " + i + " intentos")
} */

/* //ejemplo de un for con un break
for(let i=1; i<24; i++){
    
    if (i==18){
        alert("Ya sos un adulto, tenes "+ i + " años");
        break;
    }
    alert("tenes " + i + " años, sos menor de edad");
}
 */

/* //ejercicio con continue y desemascarando a mi amigo el maestro jardinero 
for(let i=1; i<19; i++){
    
    if (i==17){
        alert("No se puede, tiene "+ i + " años es ilegal pero a agustin no le importa");
        continue;
    }else if (i==18){
        alert("esta todo bien "+ i + " años es legal pero a agustin no le interesa");
    }
    else alert("tenes " + i + " años, sos menor de edad");
} */



//PRACTICA CON WHILE Y UN IF ANIDADO
/* let i =1;

while(i<99){
    console.log("iteración n°" +i);
    i++;
}if(i==99){
    console.log("JAY-Z TIENE UNOS MALDITOS "+i+" PROBLEMAS");
}
*/

// EJEMPLOS DE UNA CUENTA REGRESIVA
/* let countdown = 10;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("¡Despegue!"); */



/* //do while 
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

//Ejemplo 2: Leer entrada del usuario al menos una vez
let password;
do {
  password = prompt("Introduce la contraseña:");
} while (password !== "1234");
console.log("Acceso concedido"); */



/* //EJEMPLO DE SWITCH 
let cuidarTrabajo = prompt("¿Como vas a llegar al trabajo hoy? temprano, justo, tarde, nunca sali")

switch (cuidarTrabajo) {
    case "temprano":
    //tareas a realizar
    alert("Muy bien tu trabajo esta a salvo")
        break;
    
    case "justo":
    //tareas a realizar
    alert("Ni mas ni menos, vives para contar otro dia");
        break;
    case "tarde":
    //tareas a realizar
    alert("La chamba te dejo, en un lento degrade");
        break;
    case "nunca sali":
    //tareas a realizar
    alert("fuiste, fuiste, fuistelaa miren mirenlaa");
        break;
    case "ndeah":
        //tareas a realizar
        alert("BUENARDAAAA DESBLOQUEASTE LA RESPUESA OCULTASAAAZAAA BRRRODDEEERRR");
                break;
    default:
        alert("introdujiste una respuesta no adnmisible");
}
 */

/// ejercicio de algoritmo simple

/* //con numeros
let num1 = 5;
let num2 = 10;

let multi = num1 * num2;
console.log(multi);

//con strings
let msj1 = "avengers";
let msj2 = " endgame";

let allmsj = msj1 + msj2;
console.log(allmsj); */

/// ejecicios de algoritmo con condicional 

/* //ejemplo1 con un bucle do while y una condicional
let superman;

do {
    superman = prompt("¿Quién es Superman?");
    if (superman == "clark kent") {
        alert("¡DESCUBRISTE LA IDENTIDAD DE SUPERMAN!");
        break; // Salir del bucle si la respuesta es correcta
    } else {
        alert("No es correcto, intenta de nuevo.");
    }
} while (superman !== "clark kent"); */

//algoritmo simple + algoritmo con condicional 

let actualidad = prompt("Ingrese año actual");
let nacimiento = prompt("Ingrese año de nacimiento");

let edad = actualidad - nacimiento;

if(edad % 2 === 0){
    alert("tu edad es un numero par");
}else {
    alert("tu edad es un numero impar");
}