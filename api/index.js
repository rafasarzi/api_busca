const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
const port = 3100
const host = "192.168.0.134"

app.use(cors())

routes(app)

app.listen( port, host, () => console.log(`servidor está rodando na porta ${host}:${port}`))

module.exports = app