const Users = [{
        fullname: 'Carlos Ostorga',
        email: 'carlosostorgamail.com',
        password: "1234",
        age: 18
    },

    {
        fullname: "Francisco Pérez",
        email: 'franperez@gmail.com',
        password: "8765",
        age: 23
    }
]
for (let item of Users) {
    console.log(item.fullname);
}