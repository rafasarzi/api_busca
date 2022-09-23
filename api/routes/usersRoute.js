const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router
  .get('/users', UserController.pegaTodasAsUsers)
  .get('/users/:id', UserController.pegaUmaUserId)
  .get('/users', UserController.pegaUmaUserId)
  .post('/users', UserController.criaUser)
  .put('/users/:id', UserController.atualizaUser)
  .delete('/users/:id', UserController.apagaUser)

module.exports = router