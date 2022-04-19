/*a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('Exercises 6.a: functions');

var num1 = 10;

var num2 = 30;

var result;

function suma(params) {
    result = num1 + num2;
    return console.log('6.a = ' + result);
}

suma();