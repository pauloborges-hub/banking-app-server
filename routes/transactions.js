// ROUTER apenas redireciona para url, a parte de lógica das requisições HTTP é feita pela CONTROLLER da aplicação
const { Router } = require('express');
const { withdrawalController, depositController } = require('../controllers/transactions');

const router = Router();

// router.get('/', getUsers);

// router.get('/:id', getUsersById);

// router.post('/', postUser);

// router.patch('/:id', patchUser);

// router.delete('/', (req, res) => {
//     res.send('delete request');
// });

router.patch('/withdrawal/:id', withdrawalController);
router.patch('/deposit/:id', depositController);

module.exports = router;