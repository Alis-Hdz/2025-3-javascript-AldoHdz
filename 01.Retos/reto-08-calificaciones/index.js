// Debería mostrar algo como:
// {
//   aprobados: 3,
//   reprobados: 2,
//   promedio: 70,
//   mayor: 90,
//   menor: 50
// }

const { ask } = require("./helpers/input");

function obtenerPromedio(numeros) {//Función para promediar los valores del arreglo (calificaciones)

  let total = 0; //Definimos una variable la cual será fundamental para obtener el promedio, porque se requiere de un total para promediar entre la cantidad de numeros

  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }

  return total / numeros.length;
}

function obtenerAprobados(numeros) {
  //Esta función es para obtener aprobados y reprobados

  let aprobados = 0;
  let reprobados = 0;

  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 70) {
      aprobados++;
    } else {
      reprobados++;
    }
  }

  return { aprobados, reprobados };
}

function analizarCalificaciones(numeros) {
  const { aprobados, reprobados } = obtenerAprobados(numeros); //Desestructuración (destructuring) para extraer valores de un objeto
  const promedio = Math.floor(obtenerPromedio(numeros)); //Math.floor redondea hacia abajo al entero más cercano
  const califAlta = Math.max(...numeros); // Math.max se obtiene el valor más alto o máximo
  const califBaja = Math.min(...numeros); //Math.min se obtiene el valor más pequeño o minimo

  return {
    aprobados,
    reprobados,
    promedio,
    califAlta,
    califBaja,
  };
}

async function main() {
  const calificaciones = [90, 89, 34, 45, 67, 89, 23, 12, 45, 89, 8, 90];

  const resultado = analizarCalificaciones(calificaciones);

  console.log(resultado);
}

main();
