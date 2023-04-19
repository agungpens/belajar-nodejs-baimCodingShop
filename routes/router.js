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
router.get('/foods', foodsController.methodGet)
router.get('/foods/:id', foodsController.methodGetById)
router.put('/foods/:id', foodsController.methodPut)
router.delete('/foods/:id', foodsController.methodDelete)

router.post('/foods/upload', foodsController.methodUploadFoods)
router.post('/foods/search', foodsController.methodGetByQuery)
module.exports = router