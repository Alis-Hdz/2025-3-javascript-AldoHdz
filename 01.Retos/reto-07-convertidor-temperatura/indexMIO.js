const { ask } = require('./helpers/input');

async function main() {
  // 1) Pregunta tipo (C/F) → normaliza a mayúsculas y valida
  // 2) Pregunta temperatura → convierte a Number y valida NaN
  // 3) Según el tipo, calcula la conversión
  // 4) Imprime ambos valores (opcional: formatea con toFixed)
  // }

  const Tipo = (await ask ("¿A que temperatura quieres convertir? (°C y en °F): "))
  const temp = Number (await ask ("Dame la temperatura que quieres convertir: "))

  let convertida 
  switch (Tipo) {

    case "c":
      convertida = temp * 9/5 + 32 
      console.log("La temperatura que tu ingresaste en F era: " + temp + " la temperatura convertida es: " + convertida)
    break; 

    case "C":
      convertida = temp * 9/5 + 32; 
      console.log("La temperatura que tu ingresaste en F era: " + temp + " la temperatura convertida es: " + convertida)
    break; 

    case "f":
      convertida = (temp-32) * 5/9; 
      console.log("La temperatura que tu ingresaste en C era: " + temp + " la temperatura convertida es: " + convertida)
    break; 

    case "F":
      convertida = (temp-32) * 5/9; 
      console.log("La temperatura que tu ingresaste en C era: " + temp + " la temperatura convertida es: " + convertida)
    break; 

    default: 
      console.log("Elige bieeeeeeeeeeeeeeen entre C y F")
    return; 

  }

}

main();