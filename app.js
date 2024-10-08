"use strict"
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routers');

app.use(router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});