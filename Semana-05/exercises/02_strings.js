/*a) Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('Exercises 2.a: string');

var stringTen = 'brooklyn nine';

alert('2.a = ' + stringTen.toUpperCase());

/*b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Exercises 2.b: string');

var stringFive = stringTen.substring(0,5);

alert('2.b = ' + stringFive);

/*c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Exercises 2.c: string');

var stringThree = stringTen.substring(10,13);

alert('2.c = ' + stringThree);

/*d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/

console.log('Exercises 2.d: string')

var stringEx_d = stringTen.substring(0,1).toUpperCase() + stringTen.substring(2,13).toLowerCase();

alert('2.d = ' + stringEx_d);

/*e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('Exercises 2.e: string');

var stringSpace = stringTen.indexOf(' ');

alert('2.e = ' + stringSpace);

/*f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('Exercises 2.f: string');

var stringLong = 'experienced programmer';

var editedString = stringLong.substring(0,1).toUpperCase() + stringLong.substring(1, stringLong.indexOf(' ')).toLowerCase()
+ stringLong.substring(stringLong.indexOf(' '),13).toUpperCase() + stringLong.substring(13,22).toLowerCase();

alert('2.f = ' + editedString);