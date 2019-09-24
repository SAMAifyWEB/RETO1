//Codifica un ejemplo con cada una de las propiedades y/o metodos ´
// de las clases String, Number y Date. Prueba tambien algunos de los ´
// metodos de las clase Math.

let string = "palabra";

document.write("Propiedades del String" + "<br>");

document.write(string.anchor() + ".anchor sirve para crear y mostrar programando un ancla en un documento" + "<br>");
document.write(string.big() + ".big sirve para formatear y mostrar una cadena en un documento" + "<br>");
document.write(string.blink() + ".blink causa que una cadena parpadee como si estuviese en una etiqueta" + "<br>");
document.write(string.bold() + ".bold sirve para mostrar en negrita la cadena" + "<br>");
document.write(string.charAt(2) + ".charAt devuelve en un nuevo String el caracter que le decimos a traves de un numero entero" + "<br>");
document.write(string.charCodeAt(2) + ".charCodeAt devuelvo un numero indicando un valor unicode" + "<br>");
document.write(string.codePointAt() + ".codePointAt devuelve un entero no negativo que equivale al valor Unicode code point" + "<br>");
document.write(string.concat() + ".concat se utiliza para combinar dos o mas cadenas, no cambia las existentes, retorna una nueva" + "<br>");
document.write(string.endsWith() + ".endsWith determina cuando una cadena termina con los caracteres de otra cadena, devuelve true o false" + "<br>");
document.write(string.fixed() + ".fixed hace que muestre la cadena con una fuente de ancho fijo como si estuviera en las etiquetas tt" + "<br>");
document.write(string.fontcolor("red") + ".fontcolor('red') muestra la cadena en el color que se le indique, rojo en este caso " + "<br>");
document.write(string.includes('hola') + " .includes determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, retornando true o false" + "<br>");
document.write(string.indexOf("b") + " .indexOf devuelve el indice de la primera ocurrencia encontrada, si no lo encuentra devuelve -1" + "<br>");
document.write(string.fontsize(10) + ".fontsize asigna un tamaño de letra" + "<br>");
document.write(string.italics() + ".italics para poner la letra en cursiva" + "<br>");
document.write(string.lastIndexOf() + ".lastIndexOf empieza por el final" + "<br>");
document.write(string.length + ".length cuenta la cadena" + "<br>");
document.write(string.link() + ".link hace que la cadena sea una url" + "<br>");
document.write(string.match() + ".match se usa para obtener todas las ocurrencias de una regular exp dentro de una cadena" + "<br>");
document.write(string.matchAll() + ".matchAll etorna un iterador de todos los resultados de ocurrencia en una cadena de texto contra una expresión regular, incluyendo grupos de captura" + "<br>");
document.write(string.normalize() + ".normalize etorna un iterador de todos los resultados de ocurrencia en una cadena de texto contra una expresión regular, incluyendo grupos de captura" + "<br>");
document.write(string.padEnd() + "" + "<br>");
document.write(+"" + "<br>");
document.write(+"" + "<br>");
document.write(+"" + "<br>");


let number = 2;

document.write("Propiedades del Number" + "<br>");

document.write(number.toExponential() + ".toExponential muestra el numero de decimales a mostrar" + "<br>");
document.write(number.toString()+".toString lo convierte en String" + "<br>");
document.write(number.toFixed()+"" + "<br>");
document.write(number.toLocaleString()+".toLocaleString lo convierte en un string local" + "<br>");
document.write(number.valueOf()+".valueOf miramos el valor que devuelve" + "<br>");

document.write("Propiedades del Date" + "<br>");

let date = new Date();

document.write(date.getDate()+".getDate coge el dia en el que estamos" + "<br>");
document.write(date.getDay()+".getDay hace lo mismo que el date" + "<br>");
document.write(date.getFullYear()+".getFullYear coge el año en el que estmaos" + "<br>");
document.write(date.getHours()+".gethours coge la hora en la que estmaos" + "<br>");
document.write(date.getMilliseconds()+".getMilisicond se usa para tener los milisegundos" + "<br>");
document.write(date.getMinutes()+".getMinutes se usa para obtener los milisegundos" + "<br>");
document.write(date.getMonth()+".getMonth se usa para obterner el mes" + "<br>");

//2.1

let cadena = prompt("Introduce una cadena de texto");

informacionCadena(cadena);

function informacionCadena(cadena) {
    try {

        if (isNaN(cadena)) {
            if(cadena == cadena.toLowerCase()) {
                alert("La cadena introducida esta formada por minusculas");
            } else if(cadena == cadena.toUpperCase()) {
                alert("La cadena esta formada por mayusculas");
            } else {
                alert("La cadena esta formada por mayusculas y minusculas");
            }
        } else {
            throw "La cadena no puede ser un numero";
        }
    } catch (error) {
        alert(error);
    }
}

//2.2

let cadena = prompt("Introduce una cadena de cararcteres");
dividirCadena();

function dividirCadena() {
    try {
        let cantidadCaracteres = cadena.length;
        let cadena1 = cadena.substr(0,cantidadCaracteres/2);
        let cadena2 = cadena.substr((cantidadCaracteres/2));
        alert("La primera mitad de la cadena esta formada por "+cadena1+
            " la segunda mitad de la cadena esta formada por "+cadena2+" la cadena introducida es "+cadena);
    } catch (e) {
        alert(e);
    }

}

//2.3

function palindromo(cadenaSinEspacios){
    if(cadenaSinEspacios === cadenaSinEspacios.split("").reverse().join(""))
        alert("Es un palindromo")
    else
        alert("No es un palindromo")
}

palindromo(prompt("Type a string").replace(/\s/g, "").toUpperCase());

//2.4

calcSueldo(parseInt(prompt("introduce el sueldo")),
    parseInt(prompt("introduce los años que llevas en la empresa")))
function calcSueldo(sueldo,años){
    if (sueldo<500 && años>=10)
        alert("el nuevo sueldo a pagar seria: "+(sueldo+(sueldo*0.2)))
    else if (sueldo<500 && años<10)
        alert("el nuevo sueldo a pagar seria: "+(sueldo+(sueldo*0.1)))
    else if (sueldo>=500)
        alert("sueldo sin cambios: "+sueldo)
}


//2.5


let getUserNumber = randomNumber => {
    let userNumber;
    do {
        userNumber = parseInt(prompt("Adivina el numero secreto"))
        if(userNumber > randomNumber)
            alert("El numero es menor")
        else if (userNumber < randomNumber)
            alert("El numero es mayor")
        else
            alert("Enhorabuena, has acertado")
    }while (userNumber != randomNumber)
}

let randomNumberGenerator = () => Math.round(Math.random() * 1000);

getUserNumber(randomNumberGenerator());
console.log(randomNumber);

//2.6

let singleNumberFunction = () => Math.round(Math.random() * (9 - 1) + 1);

function generateFullNumber(){
    let arrayNumbers = [];
    do{
        let singleNumber = singleNumberFunction();
        if(!arrayNumbers.includes(singleNumber)){
            arrayNumbers.push(singleNumber);
        }
    }while(arrayNumbers.length < 4)

    console.log(arrayNumbers.join(""));
    return arrayNumbers.join("")
}

function getUserNumber(randomFullNumber) {
    let userNumber;
    do {
        let muertos = 0;
        let heridos = 0;
        try {
            userNumber = prompt("Adivina el numero secreto")
            if (!Number.isInteger(parseInt(userNumber))) {
                throw "No es un numero";
            }
            else if(userNumber.length !== 4){
                throw "Debes introducir 4 números";
            }
            else{
                let array = []
                userNumber.toString().split("").forEach(n => {
                    if(!array.includes(n)){
                        array.push(n)
                    }
                })
                if(array.length < 4){
                    throw "No puedes introducir numeros repetidos"
                }
            }
            for (let i   = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if(userNumber.charAt(i) == randomFullNumber.charAt(j)){
                        if(i == j){
                            muertos++
                        }
                        else{
                            heridos++
                        }
                    }
                }
            }
            if(muertos == 4)
                alert("Enhorabuena, has vencido!")
            else
                alert("Muertos: " + muertos + "  Heridos: " + heridos);
        }
        catch(err) {
            alert(err)
        }
    }while (userNumber != randomFullNumber)
}

getUserNumber(generateFullNumber());

//2.7

let numeros = [];
let i =0;
let confir;

const reducer = (accumulator, currentValue) => accumulator + currentValue;
while (confir!=false) {
    numeros[i] = parseInt(prompt("Introduce un numero "));
    confir = confirm("Quieres seguir?");
    console.log(numeros[i]);
    i++;
}
console.log(numeros.reduce(reducer));

//2.8

let arrayNumeros = []

function getNumbers(){
    let nVeces = parseInt(prompt("Cuantos números quieres introducir?"))

    for (let i = 0; i < nVeces; i++) {
        let numero = parseInt(prompt("Introduce un numero"))
        arrayNumeros.push(numero);
    }
}
getNumbers();
let arrayPositivos = arrayNumeros.filter(n => n > 0);
let arrayNegativos = arrayNumeros.filter(n => n < 0);

alert("Numeros positivos: " + arrayPositivos.length + " // Numeros negativos: " + arrayNegativos.length);

//2.9

let numeros = [];
let num;
let respuesta = true;

for(let i = 0;respuesta == true; i++){
    try {
        num = parseInt(prompt("Introduce un numero"));
        if (!isNaN(num)) {
            numeros.push(num);
        } else
            throw "Tienes que introducir numeros";

        respuesta = confirm("¿Quieres continuar introduciendo numeros?");
    } catch (e) {
        alert(e);
    }

}

alert(numeros);
compararNumeros(numeros);

function compararNumeros(numeros) {
    let numMaximo , numMinimo ;


    numMaximo = Math.max.apply(null,numeros);
    numMinimo = Math.min.apply(null,numeros);

    alert("El menor numero introducido es: "+numMinimo+"\n"+
        "El mayor numero introducido es: "+numMaximo)


}

//2.10

for (var ano = 2030; ano <= 2050; ano++) {
    var dia = new Date(ano, 0, 1);
    if ( dia.getDay() === 0 )
        console.log("1 de enero en domingo en el año "+ano);
}

//2.11

let dateNow = new Date()
let dateNavidad = new Date(dateNow.getFullYear() + "/12/25")

let daysLeft = () => Math.round((dateNavidad.getTime() - dateNow.getTime()) / (1000*60*60*24))
alert(daysLeft() + " días restantes")

//2.12
// - Validar un dni
let dni = prompt("Introduce tu dni");
let expresionregular = new RegExp(/^\d{8}[a-zA-Z]$/);

if (expresionregular.test(dni)) {
    alert("El dni introducido es correcto");
} else
    alert("El dni introudcido NO es correcto");
// - Validar un nombre
let nombre = prompt("Introduce tu nombre");
let expresionRegular = new RegExp(/^[A-Z][a-z]{2,}/)

if (expresionRegular.test(nombre)) {
    alert("El nombre introducido es correcto");
} else
    alert("El nombre introudcido NO es correcto");

// - Validar una url
let URL = prompt("Introduce una url");
expresionregular = new RegExp("^https://[A-Za-z0-9]+$");

if (expresionRegular.test(URL)) {
    alert("La url introducida es correcto");
} else
    alert("La url introudcida NO es correcto");

// - Validar una IP
let IP = prompt("Introduce tu ip");
expresionregular = new RegExp("^([0-9]{3}\.){3}[0-9]{3}$");

if (expresionRegular.test(IP)) {
    alert("La IP introducida es correcto");
} else
    alert("La IP introudcida NO es correcto");

// - Poner en mayusculas todas las vocales de un string ´


// - Saber si hay o no una determinada palabra en una frase.
let frase = prompt("Introduce una frase");
expresionregular = new RegExp("hola");

if (expresionregular.test(frase)) {
    alert("Hemos encontrado la palabra hola");
} else
    alert("No hemos encontrado la palabra hola");

