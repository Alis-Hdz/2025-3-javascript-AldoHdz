const { ask } = require('../helpers/input.js');


function diffDays(actualDate, birthDate){

    const diff = actualDate-birthDate
    const edadenDias = Math.floor(diff / (1000 * 60 * 60 * 24))

    return edadenDias; 
}

function diffMonth(actualDate, birthDate){

    const diff = actualDate-birthDate
    const edadenDias = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))

    return edadenDias; 
}

function diffYears(actualDate, birthDate){

    const diff = actualDate-birthDate
    const edadenDias = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))

    return edadenDias; 
}

async function main() {

    const actualDate = new Date()

    const birthdateDay = Number(await(ask("¿Cúal es el día de tu fecha de nacimiento?")))
    const birthdateMonth = Number(await(ask("¿Cúal es el mes de tu fecha de nacimiento?")))
    const birthdateYear = Number(await(ask("¿Cúal es el año de tu fecha de nacimiento?")))

    const birthDate = new Date (`${birthdateYear}-${birthdateMonth}-${birthdateDay}`)


    console.log("Haz vivido aproximadamente: ");
    console.log(`${diffDays(actualDate, birthDate)} Días`)
    console.log(`${diffMonth(actualDate, birthDate)} Meses`)
    console.log(`${diffYears(actualDate, birthDate)} Años`)


}


main();