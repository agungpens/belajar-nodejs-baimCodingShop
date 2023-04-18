const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('ini route get!'))
app.post('/post', (req, res) => res.send('ini route post!'))
app.put('/put', (req, res) => res.send('ini route put!'))
app.delete('/delete', (req, res) => res.send('ini route delete!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))