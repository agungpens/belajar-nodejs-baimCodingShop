const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/belajar/:id/:nama', function (req, res) {
    const id = req.params.id
    const nama = req.params.nama

    let respon = {
        id: id,
        nama: nama
    }

    res.send(respon)
})

app.post('/belajar', function (req, res) {
    res.send(req.body)
})

app.put('/belajar/:id', function (req, res) {
    const id = req.params.id
    let respon = {
        id: id,
        body: req.body
    }
    res.send(respon)
})

app.delete('/belajar/:id', function (req, res) {
    res.send(req.params.id)
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))