/*a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('Exercises 6.a: functions');

var num1 = 10;

var num2 = 30.9;

var result;

function suma() {
    result = num1 + num2;
    return console.log('6.a = ' + result);
}

suma();

/*b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('Exercises 6.b: functions');

function validation(number1, number2) {
    if(isNaN(number1) || isNaN(number2)) {
        alert('It is not a number');
        return console.log(NaN);
    }else{
        result = num1 + num2;
        return console.log('6.b = ' + result);
    }
}

validation(num1, num2);

/*c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log('Exercises 6.c: functions');

var numInteger = 10;

function validateinteger() {
    if(Number.isInteger(numInteger)) {
        console.log(true);
    }else{
        console.log(false);
    }
}

validateinteger();

/*d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('Exercises 6.d: functions');

function validationNum(number1,number2) {
    if(Number.isInteger(number1) && Number.isInteger(number2)) {
        result = num1 + num2;
        return console.log('6.d = ' + result);
    }else if(Number.isInteger(number1) == false) {
        alert('first number is not integer, it will become');
        num1 = Math.round(number1);
    }else if(Number.isInteger(number2) == false) {
        alert('second number is not integer, it will become')
        num2 = Math.round(number2);
    }else {
        alert('Both numbers are integers, they are going to be added');
    }

    result = num1 + num2;
    return console.log('6.d = ' + result);
}

validationNum(num1, num2);