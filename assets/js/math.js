import { saludar } from "./cualquiera.js";

export function calculadora({ operacion, num1, num2 }) {
  if (operacion == "suma") {
    return num1 + num2;
  }

  if (operacion == "resta") {
    return num1 - num2;
  }

  if (operacion == "multiplicacion") {
    return num1 * num2;
  }

  if (operacion == "division") {
    return num1 / num2;
  }

  return "Operacion no válida";
}

saludar();
