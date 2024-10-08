const router = require('express').Router();
const Controller = require('../controllers');

router.get('/', (req, res) => {
    res.send("Ini home nanti dikerjain sama Mail");
});

router.get('/register', Controller.register);

module.exports = router;