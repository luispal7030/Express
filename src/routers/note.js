const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('notas desde la base de datos');
})
module.exports = router;