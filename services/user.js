// Adiciona a biblioteca FileSystem ao projeto
const fs = require('fs');

// Retorna a lista de usuários cadastrados do "users.json"
function getUsersFromFile() {
    return JSON.parse(fs.readFileSync('users.json'));
}

// Retorna a lista filtrada por id de usuários cadastrados do "users.json"
function getUsersFromFileById(id) {
    const users = JSON.parse(fs.readFileSync('users.json'));

    const filteredUsers = users.filter((user) => {
        return (user.id === id)
    });
    return filteredUsers;
}

// Adiciona um novo usuário ao arquivo "users.json"
function insertUser(newUser) {
    const users = JSON.parse(fs.readFileSync('users.json'));

    const newUserList = [...users, newUser];

    fs.writeFileSync('users.json', JSON.stringify(newUserList));
}

// Modifica dados do usuário por id
function modifyUser(newValue, id) {
    let users = JSON.parse(fs.readFileSync('users.json'));
    const modifiedIndex = users.findIndex((user) => {
        return (user.id === id)
    });

    const newUser = { ...users[modifiedIndex], ...newValue };

    users[modifiedIndex] = newUser;

    fs.writeFileSync('users.json', JSON.stringify(users));
}

// Exportação das funções services -> controller 
module.exports = {
    getUsersFromFile,
    getUsersFromFileById,
    insertUser,
    modifyUser
}