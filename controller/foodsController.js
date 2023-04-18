const foodsModel = require('../models/foodsModel')

// POST DATA
const methodPost = async (req, res) => {
    try {
        const { namamakanan, daerah, deskripsi } = req.body;
        const store = new foodsModel({
            namamakanan, daerah, deskripsi
        })

        await store.save()
        res.json(store)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('erorr mase!')
    }
}
// GET DATA
const methodGet = async (req, res) => {
    try {
        const getAll = await foodsModel.findAll({})
        res.json(getAll)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('erorr mase!')
    }
}
// GET DATA BY ID
const methodGetById = async (req, res) => {
    try {
        const getById = await foodsModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(getById)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('erorr mase!')
    }
}
// PUT DATA
const methodPut = async (req, res) => {
    try {
        const { namamakanan, daerah, deskripsi } = req.body;
        const id = req.params.id;

        const updateFoods = foodsModel.update({
            namamakanan, daerah, deskripsi
        }, {
            where: { id: id }
        })

        await updateFoods
        res.send('Data Berhasil Di Update!!')

    } catch (error) {
        console.error(error.message)
        res.status(500).send('erorr mase!')
    }
}
// DELETE DATA
const methodDelete = async (req, res) => {
    try {

        const id = req.params.id;
        const foodDelete = foodsModel.destroy({
            where: { id: id }
        })

        await foodDelete

        res.send('Data Berhasil Di Hapus!!')

    } catch (error) {
        console.error(error.message)
        res.status(500).send('erorr mase!')
    }
}

module.exports = {
    methodPost,
    methodGet,
    methodGetById,
    methodPut,
    methodDelete
}