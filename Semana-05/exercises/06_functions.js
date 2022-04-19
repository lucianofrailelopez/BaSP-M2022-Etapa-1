/*a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('Exercises 6.a: functions');

var num1 = 10;

var num2 = 30;

var result;

function suma() {
    result = num1 + num2;
    return console.log('6.a = ' + result);
}

suma();

/*b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('Exercises 6.b: functions');

function validation() {
    if(isNaN(num1) || isNaN(num2)) {
        alert('It is not a number');
        return console.log(NaN);
    }else{
        result = num1 + num2;
        return console.log('6.b = ' + result);
    }
}

validation();

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