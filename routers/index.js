const express = require('express');
const Controller = require('../controllers');
const route = express.Router();

route.get('/', (req, res) => {
    res.send("Home bukan kerjaan gue");
});

route.get('/login', Controller.login);

module.exports = route;