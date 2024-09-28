// ROUTER apenas redireciona para url, a parte de lógica das requisições HTTP é feita pela CONTROLLER da aplicação
const { Router } = require('express');
const {getUsers} = require('../controllers/user');

const router = Router();

router.get('/', getUsers);

router.patch('/', (req, res) => {
    res.send('patch request');
});

router.post('/', (req, res) => {
    res.send('post request');
});

router.delete('/', (req, res) => {
    res.send('delete request');
});

module.exports = router;