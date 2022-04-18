/*a) Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('Exercises 2.a: string');

var stringTen = 'Brooklyn nine';

alert('2.a = ' + stringTen.toUpperCase());

/*b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Exercises 2.b: string');

var stringFive = stringTen.substring(0,5);

alert('2.b = ' + stringFive);