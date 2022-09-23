const { Router } = require('express')
const ChamadaController = require('../controllers/ChamadaController')

const router = Router()

router
  .get('/chamada', ChamadaController.pegaTodasAsChamadas)
  .post('/chamada', ChamadaController.criaChamada)
  .put('/chamada/:id', ChamadaController.atualizaChamada)
  .delete('/chamada/:id', ChamadaController.apagaChamada)

module.exports = router