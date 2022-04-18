/*a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('Exercises 3.a: arrays');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];

console.log(months[5], months[11]);

// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('Exercises 3.b: arrays');

console.log(months.sort());

// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('Exercises 3.c: arrays');

var addElement_1 = months.unshift('agua');

var addElement_2 = months.push('tomate');

console.log(months);

// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('Exercises 3.d: arrays');

var removeElement_1 = months.shift();

var removeElement_2 = months.pop();

console.log(months);

// e) Invertir el orden del array (utilizar reverse).

console.log('Exercises 3.e: arrays');

var reverseElement = months.reverse();

console.log(reverseElement);

// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('Exercises 3.f: arrays');

var joinElement = months.join('-');

console.log(joinElement);