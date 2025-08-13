const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador

  const PriNumero = Number (await ask("Dame un número"));
  const SegNumero = Number (await ask("Dame un segundo número"));
  const Operador = await ask("Dame el operador que deseas usar")

  console.log





}

main();