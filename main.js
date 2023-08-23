let nombre = "Hernan";
let apellido = "Paez";

console.log(nombre + apellido);

console.log(`${nombre} ${apellido}`);

console.log(nombre.concat(apellido));

let stringRandom = "123456";

console.log(stringRandom);

// borra los espacios en blaco al principio y al final del string
console.log(stringRandom.trim());

// string (split) convierte un string a un array y lo separa en base a lo que le pongamos en el parametro
// array (reverse) invierte le orden de los elementos del array
// array (join) junta en un string los elementos del array
console.log(stringRandom.trim().split("").reverse().join(""));

// console

console.log("Log");
console.error("Error");
console.warn("Warn");
console.info("Info");

let miArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// matriz de 3x3

console.table(miArray);
