/*a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras. */

console.log('Exercises 5.a: for');

var elementFut = ['pelota', 'arco', 'jugadores','camiseta', 'botines'];

for (let i = 0; i < elementFut.length; i++) {
    alert(elementFut[i]);
}

/*b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
modificada. */

console.log('Exercises 5.b: for');

for (let i = 0; i < elementFut.length; i++) {
    alert(elementFut[i].substring(0,1).toUpperCase() + elementFut[i].substring(1).toLowerCase());
}

/*c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la 
cadena completa. */

var sentence = '';

for (let i = 0; i < elementFut.length; i++) {
    sentence += elementFut[i];
}

alert(sentence);