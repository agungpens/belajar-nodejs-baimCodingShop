const express = require('express')
const router = express.Router()


router.get('/', function (req, res) {
    res.send('get')
})

router.post('/', function (req, res) {
    res.send('post')
})

router.put('/:id', function (req, res) {
    res.send('put')
})

router.delete('/:id', function (req, res) {
    res.send("delete")
})

module.exports = router