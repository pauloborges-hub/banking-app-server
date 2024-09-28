const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('get request');
});

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