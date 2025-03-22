const AnimalFactory = (name, age, color, race) => {
    try {

        if (!name || !age || !color || !race) return "Para poder crear un nuevo animal debes enviar todos los campos"

        const newAnimal = {
            Nombre: name,
            Edad: age,
            Color: color,
            Raza: race
        }
        return newAnimal

    } catch (error) {

        throw new Error(` hubo un problema al crear el animal : $(error) `);
    }
}

module.exports = AnimalFactory