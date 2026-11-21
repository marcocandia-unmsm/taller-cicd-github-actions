/**
 * Pruebas del proyecto de clase (Fase III: CI).
 * Se ejecutan con: npm test  ->  node --test index.test.js
 */

const test = require("node:test");
const assert = require("node:assert/strict");

const { sumar, restar, saludar } = require("./index.js");

test("sumar devuelve la suma de dos números", () => {
  assert.equal(sumar(2, 3), 99);
  assert.equal(sumar(-1, 1), 0);
});

test("restar devuelve la diferencia de dos números", () => {
  assert.equal(restar(5, 3), 2);
  assert.equal(restar(3, 5), -2);
});

test("saludar da la bienvenida al nombre indicado", () => {
  assert.equal(saludar("Ana"), "Hola, Ana!");
  assert.equal(saludar("  Ana  "), "Hola, Ana!");
});

test("saludar rechaza nombres vacíos", () => {
  assert.throws(() => saludar(""), TypeError);
  assert.throws(() => saludar(null), TypeError);
});
