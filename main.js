// let num1 = 10;
// let num2 = 5;

// let operacion = "suma";

// if (operacion == "suma") {
//   console.log(num1 + num2);
// } else if (operacion == "resta") {
//   console.log(num1 - num2);
// } else if (operacion == "multiplicacion") {
//   console.log(num1 * num2);
// } else if (operacion == "division") {
//   console.log(num1 / num2);
// } else {
//   console.log("Operacion no válida");
// }

// funciones declarativas
function decirHola() {
  console.log("hola mundo");
}

// expresiva
// const decirHola2 = function () {
//   console.log("hola mundo 2");
// };

// funciones de flecha
// const decirHola3 = () => {
//   console.log("hola mundo 3");
// };

// decirHola();
// decirHola3();

// function suma(numero1 = 0, numero2 = 0) {
//   console.log(numero1 + numero2);
// }

// suma(3, 2);

// con parametros nombrados y aplicando desestructuracion
function calculadora({ operacion, num1, num2 }) {
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
}

calculadora({
  operacion: "resta",
  num1: 10,
  num2: 20,
});

const miObjeto = {
  nombre: "hola",
  apellido: "chau",
};
const miArray = ["hola", "chau"];

// desestructuracion de objetos
const { apellido, nombre } = miObjeto;

// desestructuracion de arrays
const [variable1, variable2] = miArray;
