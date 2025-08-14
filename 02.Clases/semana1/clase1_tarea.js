const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador

  const PriNumero = Number (await ask("Dame un número"));
  const SegNumero = Number (await ask("Dame un segundo número"));
  const Operador = await ask("Dame el operador que deseas usar (+, -, *, /)")



  //ES MAS SENCILLO USAR UN SWITCH: das las opciónes cuando preguntas por el operador y lo limitas a las opciones que desees, ya con cada respuesta que tu definas, realizas los "CASE" que sean necesarios. 
  
  let result;
  switch(Operador) {

    case '+':
      result = PriNumero + SegNumero;
    break;

    case '-':
      result = PriNumero - SegNumero;
    break;

    case '*':
      result = PriNumero * SegNumero;
    break;

    case '/':
      result = PriNumero / SegNumero;
    break;

    default:
      console.log("Operador no válido");
    return;

  }

  console.log("El resultado de la operación es: " + result )

}

main();