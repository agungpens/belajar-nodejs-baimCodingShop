const express = require('express')
const router = express.Router()

const sampleController = require('../controller/sampleController')


router.get('/', sampleController.methodGet)

router.post('/', sampleController.methodPost)

router.put('/:id', sampleController.methodPut)

router.delete('/:id', sampleController.methodDelete)

module.exports = router