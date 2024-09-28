const express = require('express');
const userRoute = require('./routes/user');

const app = express();
const port = 8000;

app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`listening port ${port}`);
})