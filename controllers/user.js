// CONTROLLER apenas faz a parte de lógica das requisições, toda a comunicação com o banco de dados é feita pelo SERVICES da aplicação

// Importação das funções da controller
const { getUsersFromFile, getUsersFromFileById, insertUser, modifyUser } = require('../services/user');

// Função que retorna lista com todos os usuários
function getUsers(req, res) {
    try {
        const users = getUsersFromFile();
        res.send(users);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// Função que retorna lista com usuário por id
function getUsersById(req, res) {
    try {
        const id = req.params.id;
        const user = getUsersFromFileById(id);
        res.send(user);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// Função que cria novo usuário com dados do body
function postUser(req, res) {
    try {
        const newUser = req.body;
        insertUser(newUser);
        res.status(201);
        res.send('New user created');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// Função que modifica dados do usuário pelo body
function patchUser(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        modifyUser(body, id);
        res.send('User successfully modified ')
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }   
}

// Exportação das funções controller -> routes 
module.exports = {
    getUsers,
    getUsersById,
    postUser,
    patchUser
};