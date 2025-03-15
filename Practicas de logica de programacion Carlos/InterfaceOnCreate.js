const LeerLinea = require("readline")
const vehicleOnCreate = require("./VehicleService")





const InterfazConsola = LeerLinea.createInterface({
    input : process.stdin,
    output : process.stdout
})


InterfazConsola.question("Porfavor ingrese el modelo del vehiculo ", (model) => {

    InterfazConsola.question ("Porfavor ingrese el color de vehiculo " , (color) => {

        InterfazConsola.question("Porfavor ingrese el año del vehiculo ", (year) => {

            InterfazConsola.question("Porfavor nos ingrese el estado del vehiculo " , (isFuncional) => {

                InterfazConsola.question( "Porfavor ingrese la marca de vehículo ", (brand)=> {

                    console.log(vehicleOnCreate(model, color, year, isFuncional, brand));
                    

                })
            })
        })

    })

})