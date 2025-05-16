const fs = require("fs");
const mongo = "./mongo.json"
const updateUsers = (id, userNewData) => {

    try {

        fs.readFile(mongo, "utf-8", (error, data) => {
            if (error) throw Error(`$(error)`);

            const usersObj = JSON.parse(data)

            const userUpdate = usersObj.users.find(user => user.id === id)

            if (userUpdate) {

                console.log(userUpdate);
                userUpdate.name = userNewData.name
                userUpdate.lastname = userNewData.lastname
                userUpdate.DUI = userNewData.DUI
                userUpdate.correo = userNewData.correo

            }
            console.log(usersObj);
            fs.writeFile(mongo, JSON.stringify(usersObj, null, 2), (error) => {
                if (error) throw new Error(`${error}`);
                console.log("Usuario actualizado correctamente por su ID")
            })

        })


    } catch (error) {
        throw new Error(`$(error)`);
    }
}

module.exports = updateUsers