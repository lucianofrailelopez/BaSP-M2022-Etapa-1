/*a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('Exercises 3.a: arrays');

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];

console.log(meses[5], meses[11]);

// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('Exercises 3.b: arrays');

console.log(meses.sort());

// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('Exercises 3.c: arrays');

var addElement_1 = meses.unshift('agua');

var addElement_2 = meses.push('tomate');

console.log(meses);

// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('Exercises 3.d: arrays');

var removeElement_1 = meses.shift();

var removeElement_2 = meses.pop();

console.log(meses);