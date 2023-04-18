const express = require('express')
const router = express.Router()

const sampleController = require('../controller/sampleController')
const foodsController = require('../controller/foodsController')


router.get('/', sampleController.methodGet)
router.post('/', sampleController.methodPost)
router.put('/:id', sampleController.methodPut)
router.delete('/:id', sampleController.methodDelete)

// foods
router.post('/foods', foodsController.methodPost)
module.exports = router