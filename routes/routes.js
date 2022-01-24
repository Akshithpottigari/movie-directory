const express  = require('express');
const router = express.Router()
// const movies = require('../movies')

router.get('/', (req, res) => {
    // res.sendFile('../public/index.html', movies)
    res.sendFile('../public/index.html')
})


module.exports = router