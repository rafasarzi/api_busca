const database = require('../models')

class ChamadaController {
  
  static async pegaTodasAsChamadas(req, res){
    try {
          console.log("req::::: ", req.query.postId)
    
          if(req.query.postId){
            console.log("sim")
            const umachamada = await database.Chamada.findAll( { 
              where: { 
                postId: String(req.query.postId) 
              }
            })
            return res.status(200).json(umachamada ? umachamada : [])
          } 
    
      const todasAsChamadas = await database.Chamada.findAll()
      return res.status(200).json(todasAsChamadas)   
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async criaChamada(req, res) {
    const novaChamada = req.body
    try {
      const novaChamadaCriada = await database.Chamada.create(novaChamada)
      return res.status(200).json(novaChamadaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async atualizaChamada(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Chamada.update(novasInfos, { where: { id: Number(id) }})
      const chamadaAtualizada = await database.Chamada.findOne( { where: { id: Number(id) }})
      return res.status(200).json(chamadaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async apagaChamada(req, res) {
    const { id } = req.params
    try {
      await database.Chamada.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = ChamadaController