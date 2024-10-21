// ROUTER apenas redireciona para url, a parte de lógica das requisições HTTP é feita pela CONTROLLER da aplicação
const { Router } = require('express');
const { getUsers, getUsersById, postUser, patchUser } = require('../controllers/user');

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUsersById);

router.post('/', postUser);

router.patch('/:id', patchUser);

router.delete('/', (req, res) => {
    res.send('delete request');
});

module.exports = router;