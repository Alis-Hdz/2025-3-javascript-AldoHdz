const { ask } = require('../helpers/input.js');

async function main() {

    let opcion = "";
    let frutas = []

    // Que deseas hacer
    // #1 agregar una fruta 
    // #2 eliminar una fruta
    // #3 salir

    while (opcion !== "3"){

        opcion = await ask ("¿QUe opción deseas tomar? \n1.- Agregar una fruta. \n2.-Eliminar una fruta.\n3.-Salir\n ")

        if (opcion === "1"){

            let frutanueva = await ask ("¿Que fruta deseas agregar?")
            frutas.push(frutanueva);
            console.log("Fruta agregada: ", frutanueva);
            console.log("Frutas disponibles: ", frutas);
            
        }
        else if (opcion ==="2"){

            if (frutas.length === 0){

                console.log("No hay frutas disponibles");
                continue;
            }
            else {

                let frutaEliminar = await ask ("¿Que fruta deseas eliminar?: ");
                let index = frutas.indexOf(frutaEliminar)

                if (index !== -1 ){

                    frutas.splice (index, 1);
                    console.log(`${frutaEliminar} ha sido eliminada`);

                }
                else {

                    console.log("fruta no encontrada");

                }

                console.log("Frutas disponibles", frutas);

            }

        }
        else if (opcion ==="3"){

            console.log("Gracias");

        }
        else {

            console.log("Opción inválida")

        }

    }

}


main();