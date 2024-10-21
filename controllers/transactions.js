const { withdrawalBalanceService } = require('../services/transactions');

function withdrawalBalanceController(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        withdrawalBalanceService(body, id);
        res.send('Withdrawal successful');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }   
}

module.exports = {
    withdrawalBalanceController
}