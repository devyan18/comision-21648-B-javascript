// Estructuras de control de flujo

// AND &&
// OR ||
// NOT !
let num1 = 10;
let num2 = 5;

let operacion = "suma";

if (operacion == "suma") {
  console.log(num1 + num2);
} else if (operacion == "resta") {
  console.log(num1 - num2);
} else if (operacion == "multiplicacion") {
  console.log(num1 * num2);
} else if (operacion == "division") {
  console.log(num1 / num2);
} else {
  console.log("Operacion no válida");
}

switch (operacion) {
  case "suma":
    console.log(num1 + num2);
    break;
  case "resta":
    console.log(num1 - num2);
    break;
  case "division":
    console.log(num1 / num2);
    break;
  case "multiplicacion":
    console.log(num1 * num2);
    break;
  default:
    console.log("el valor no es conocido");
    break;
}

let whileIterador = 0;

let miArray = ["hola", "bye", "console", "log"];
console.log(miArray.length);

while (whileIterador < miArray.length) {
  console.log(miArray[whileIterador]);
  whileIterador++;
}

while (false) {
  console.log("hello while");
}

let i = 0;

do {
  console.log(miArray[i]);
  i++;
} while (i < miArray.length);

for (let j = 0; j < miArray.length; j++) {
  console.log("for ", j);
}

console.log(3 == 3 ? "hola" : "chau");
