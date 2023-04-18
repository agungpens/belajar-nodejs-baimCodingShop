const sequelize = require('sequelize');
const db = require('../config/db')

const potosModel = db.define(
    "potos",
    {
        idfoods: { type: sequelize.STRING },
        path: { type: sequelize.STRING },

    }
);

module.exports = potosModel;