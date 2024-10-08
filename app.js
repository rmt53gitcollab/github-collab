const express = require('express');
const app = express();
const port = 3000;
const route = require('./routers');

app.use(route);

app.listen(port, () => {
    console.log(`This app is listening on port: ${port}`);
});