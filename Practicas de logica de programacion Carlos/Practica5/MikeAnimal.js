const leerLinea = require("readline")
const AnimalFactory = require("./AnimalFactory")
const { log } = require("console")
const InterfazConsola = leerLinea.createInterface({
    input: process.stdin,
    output: process.stdout
})
InterfazConsola.question("Por favor ingrese el nombre del animal ", (name) => {
    InterfazConsola.question("Por favor ingrese la edad del animal ", (age) => {

        InterfazConsola.question("Por favor ingrese el color del animal ", (color) => {
            InterfazConsola.question("Por favor ingrese la raza del animal ", (race) => {

                console.log(AnimalFactory(name, age, color, race));
                InterfazConsola.close()
            })

        })

    })


})