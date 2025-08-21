// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

    for (let i=1; i<=100; i++){
        
        if (i % 2 === 0 ){

            console.log("Ten los números pares con for --- " + i);

        }

    }

    console.log("-----------------------Otro método----------------------------")

    for (let j=2; j<=100; j+=2){

        console.log("# Pares incrementando de 2 en 2 --- " + j)
        
    }


    console.log("-----------------------Otro método----------------------------")

    let contador = 1;
    while (contador<=100 ){

        if (contador % 2 === 0 ){

            console.log("Ten los números pares con while --- " + contador);
            
        }

        contador++;

    }

}

main();