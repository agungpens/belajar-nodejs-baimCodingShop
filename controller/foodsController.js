const foodsModel = require('../models/foodsModel')

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

module.exports = {
    methodPost
}