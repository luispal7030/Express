const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Index');
})

router.get('/abouts', (req, res) => {
    res.send('Abouts');
})

module.exports = router;