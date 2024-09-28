// CONTROLLER apenas faz a parte de lógica das requisições, toda a comunicação com o banco de dados é feita pelo SERVICES da aplicação
const { getUsersFromFile } = require('../services/users');

function getUsers(req, res) {
    try {
        const users = getUsersFromFile();
        res.send(users);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getUsers
};