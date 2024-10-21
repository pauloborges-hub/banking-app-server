const express = require('express');
const userRoute = require('./routes/user');
const transactionsRoute = require('./routes/transactions');

const app = express();
const port = 8000;

app.use(express.json());

app.use('/user', userRoute);
app.use('/transactions', transactionsRoute);

app.listen(port, () => {
    console.log(`listening port ${port}`);
});