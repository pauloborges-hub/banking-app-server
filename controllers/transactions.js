const { withdrawalService, depositService } = require('../services/transactions');

function withdrawalController(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        withdrawalService(body, id);
        res.send('Withdrawal successful');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }   
}

function depositController(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        depositService(body, id);
        res.send('Deposit successful');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }   
}

module.exports = {
    withdrawalController,
    depositController
}