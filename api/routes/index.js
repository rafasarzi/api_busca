const bodyParser = require('body-parser')
const chamada = require('./chamadaRoute')
const users = require('./usersRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    users,
    chamada
  )
}
