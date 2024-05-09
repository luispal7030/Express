const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.send('ingresando a la aplicacion');
})

router.get('/users/signup', (req, res) => {
    res.send('formulario de authenticacion');
})

module.exports = router;