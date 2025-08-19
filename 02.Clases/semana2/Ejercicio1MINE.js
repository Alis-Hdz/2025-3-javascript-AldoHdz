const { ask } = require('../helpers/input.js');

async function saludar (nombre){
    console.log (`Hola estimado(a): ${nombre}, espero que tengas un buen día ...`)
}



async function main() {

    const personas = [ "Aldo", "Isaac", "Adriana", "Ely", "Adriana Grandota"]

    console.log ("-----------------------Ascendente-----------------------------")
    
    for (let i = 0; i < personas.length; i++){

        saludar(personas[i]);

    }

    console.log ("-----------------------Descendente-----------------------------")

    for (let j = personas.length - 1; j >= 0; j--){

        saludar(personas[j]);

    }

}


main();