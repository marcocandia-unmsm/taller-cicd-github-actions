/**
 * Proyecto de ejemplo para el taller de CI/CD con GitHub Actions.
 * Funciones puras, fáciles de probar con el test runner nativo de Node.
 */

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function saludar(nombre) {
  if (typeof nombre !== "string" || nombre.trim() === "") {
    throw new TypeError("El nombre debe ser una cadena no vacía");
  }
  return `Hola, ${nombre.trim()}!`;
}

if (require.main === module) {
  console.log(saludar("Mundo"));
  console.log(`2 + 3 = ${sumar(2, 3)}`);
}

module.exports = { sumar, restar, saludar };
