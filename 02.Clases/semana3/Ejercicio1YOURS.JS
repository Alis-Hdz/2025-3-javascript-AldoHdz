const { ask } = require('../helpers/input.js');

async function main() {

    const personas = [

        {

            nombre: "Adriana",
            edad: 27,
            ocupacion: "Química",
            saludar: function () {
                console.log(`Hola mi nombre es ${this.nombre}`);
            }

        },

        {

            nombre: "Aldo",
            edad: 28,
            ocupacion: "Desarrollador",
            saludar: function () {
                console.log(`Hola mi nombre es ${this.nombre}`);
            }

        }

    ];

    personas[0].saludar();
    personas[1].saludar();


}


main();