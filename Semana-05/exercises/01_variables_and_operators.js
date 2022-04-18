/*a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor 
de la suma de ambos números en una 3er variable.*/

console.log('Exercises 1.a: variables and operators');

var firstNum = 10;

var secondNum = 30;

var resultNum = firstNum + secondNum;

alert('1.a = ' + resultNum);

//b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('Exercises 1.b: variables and operators');

var wordOne = 'Luciano';

var wordTwo = 'Fraile';

var resultWord = wordOne + wordTwo;

alert('1.b = ' + resultWord);

/*c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length).*/

console.log('Exercises 1.c: variables and operators');

var stringLength = wordOne.length + wordTwo.length;

alert('1.c = ' + stringLength);