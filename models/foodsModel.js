const sequelize = require('sequelize');
const db = require('../config/db')

const foodsModel = db.define(
    "foods",
    {
        namamakanan: { type: sequelize.STRING },
        daerah: { type: sequelize.STRING },
        deskripsi: { type: sequelize.STRING },
    }
);

module.exports = foodsModel;