const express = require('express')

const methodGet = (req, res) => {
    res.send('get')
}
const methodPost = (req, res) => {
    res.send('post')
}
const methodPut = (req, res) => {
    res.send('Put')
}
const methodDelete = (req, res) => {
    res.send('Delete')
}

module.exports = {
    methodGet,
    methodPost,
    methodPut,
    methodDelete
}