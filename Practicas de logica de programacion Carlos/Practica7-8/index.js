const InterfazConsola = require("./console.service");
const createDatabase = require("./create.db.service");
const createUser = require("./create.user.service");
const { v4: uuid } = require("uuid");
const updateUsers = require("./update.user.service");
const deleteUserById = require("./delete.user.service");
const shwoUsers = require("./show.users.service");
const main = () => {

    try {

        InterfazConsola.question(" Por favor ingrese una opcion\n1-Crear base de datos\n2-Crear un usuario\n3-Actualizar usuario mediante su Id\n4-Eliminar usuario mediante su Id\n5-Ver todos los usuarios\n ", (option) => {


            switch (parseInt(option)) {
                case 1:
                    createDatabase()
                    setTimeout(() => {
                        main()
                    }, 3000)
                    break;
                case 2:
                    InterfazConsola.question("Por favor ingresa tu nombre : ", (nombre) => {
                        InterfazConsola.question("Por favor ingresa tu apellido : ", (apellido) => {
                            InterfazConsola.question("Por favor ingresa tu DUI : ", (dui) => {
                                InterfazConsola.question("Por favor ingresa tu correo : ", (correo) => {
                                    const newUser = {
                                        id: uuid(),
                                        name: nombre,
                                        lastname: apellido,
                                        DUI: dui,
                                        correo: correo

                                    }
                                    createUser(newUser)
                                    setTimeout(() => {
                                        main()
                                    }, 3000)
                                })
                            })

                        })
                    })


                    break;
                case 3:
                    InterfazConsola.question("Por favor ingrese el id del usuario a actualizar ", (id) => {
                        InterfazConsola.question("Por favor ingresa el nombre ", (nombre) => {
                            InterfazConsola.question("Por favor ingresa el apellido ", (apellido) => {
                                InterfazConsola.question("Por favor ingresa el DUI ", (dui) => {
                                    InterfazConsola.question("Por favor ingresa el correo ", (correo) => {

                                        const newData = {
                                            name: nombre,
                                            lastname: apellido,
                                            DUI: dui,
                                            correo: correo

                                        }

                                        updateUsers(id, newData)
                                        setTimeout(() => {
                                            main()
                                        }, 3000)
                                    })
                                })
                            })
                        })

                    })
                    break;
                case 4:
                    InterfazConsola.question("Por favor ingrese el ID del user que desea eliminar ", (id) => {

                        deleteUserById(id)

                        setTimeout(() => {
                            main()
                        }, 3000)
                    })
                    break;
                case 5:
                    shwoUsers()
                    setTimeout(() => {
                        main()
                    }, 3000)
                    break;
                default:
                    break;
            }
        })


    } catch (error) {

        throw new Error(`${error}`);
    }

}

main()