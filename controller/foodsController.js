const foodsModel = require('../models/foodsModel')
const potosModel = require('../models/potosModel')
const fileUpload = require('../helper/fileUpload')

const { Op } = require('sequelize');

// Method GetData By Query SQL

const methodGetByQuery = async (req, res) => {
    const param1 = req.body.namamakanan
    const param2 = req.body.daerah
    try {


        const getByQuery = await foodsModel.findAll({
            attributes: [['namamakanan', 'nama'], ['deskripsi', 'keterangan']],
            //where: {
            // [Op.or]: [
            //     { namamakanan: param1 },
            //     { daerah: param2 },
            // ]
            // [Op.and]: [
            //     { namamakanan: param1 },
            //     { daerah: param2 },
            // ]
            // namamakanan: {
            //     [Op.like]: `%${param1}%`
            // }
            //}
            order: [['namamakanan', 'asc']]
        })

        if (getByQuery.length > 0) {
            res.json(getByQuery)
        }
        else {
            res.status(400).send('Data Tidak Ditemukan')
        }

    } catch (error) {
        return res.status(400).send('Erorr masehh')
    }
}

// Method Upload Data File
const methodUploadFoods = async (req, res) => {
    try {
        // ini utnuk upload file
        await fileUpload(req, res);

        if (req.file == undefined) {
            console.error(req.file)
            return res.status(400).send({ message: `Image belum dipilih` })
        }

        // untuk urusan DB
        potosModel.create({
            idfoods: req.body.idfoods,
            path: req.file.path
        }).then((data) => {
            res.status(200).send({
                message: `Data berhasil diupload ${data.path}`
            })
        })

    } catch (error) {
        console.error(error.message)
        res.status(500).send('erorr mase!')
    }
}
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
    methodDelete,
    methodUploadFoods,
    methodGetByQuery
}