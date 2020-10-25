////******************** Variables y Operadores ********************
//Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
var a = 10;
var b = 11;
var c = a+b;

//Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var name = "Franco ";
var surname = "De Battista";
var fullname = name + surname;
console.log(fullname)

/*Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
resultado la suma una 3er variable (utilizar length).
*/
var name = "Franco";
var surname = "De Battista";
var numberOfLetters = name.length + surname.length;
console.log(name.length);
console.log(surname.length);
console.log(numberOfLetters);


//******************** Strings ********************
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var surname = "De Battista";
console.log(surname.toUpperCase());

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando 
el resultado en una nueva variable (utilizar substring).*/
var surname = "De Battista";
var nickname = surname.substring(0,5);
console.log(nickname);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el 
resultado en una nueva variable (utilizar substring).*/
var surname = "De Battista";
var nickname = surname.substring(8,11);
console.log(nickname);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás 
en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var surname = "de battista";
var lastName = surname.substring(0,1).toUpperCase()+surname.substring(1,11).toLowerCase();
console.log(lastName);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer
espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var surname = "de battista";
var firstBlank = surname.indexOf(" ");
console.log(firstBlank);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los 
métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula 
y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var firstSentence = "technology revolution";
var solution = firstSentence.substring(0,1).toUpperCase() + firstSentence.substring(1,11).toLowerCase() + firstSentence.substring(11,12).toUpperCase() + firstSentence.substring(12,21).toLowerCase();
console.log(solution);


//******************** Arrays ********************
//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
//mostrar por consola los meses 5 y 11 (utilizar console.log)
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[5] + " " + months[11]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(months.sort());

//Agregar un elemento al principio y al final del array (utilizar unshift y push).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.push("last year");
console.log(months);
months.unshift("first year");
console.log(months);

//Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.pop();
console.log(months);
months.shift();
console.log(months);

//Invertir el orden del array (utilizar reverse)
console.log(months.reverse());

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var listMonths = months.join(" - ");
console.log(listMonths);

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var monthsSlice = months.slice(4,11)
console.log(monthsSlice);


//******************** If Else ********************
/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje 
“Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”*/
//Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
/*
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/

//For
//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir 
guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

/*Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de 
la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador 
el al array final (utilizar console.log).*/


//Funciones
/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor 
de dicha variable en la consola del navegador.*/

/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los 
parámetros tiene error y retornar el valor NaN como resultado.*/

//Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.

/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error
y retorna el número convertido a entero (redondeado).*/

//Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

