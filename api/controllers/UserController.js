const database = require('../models')

class UserController {
  static async pegaTodasAsUsers(req, res){
    try {

      console.log("req::::: ", req.query.login)

      if(req.query.login || req.query.login == ""){
        console.log("sim")
        const umaUser = await database.Users.findOne( { 
          where: { 
            login: String(req.query.login) 
          }
        })
        return res.status(200).json(umaUser ? umaUser : [])
      } 

      const todasAsUsers = await database.Users.findAll()
      return res.status(200).json(todasAsUsers)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaUserId(req, res) {
    const { id } = req.params
    try {
      const umaUser = await database.Users.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umaUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaUser(req, res) {
    const novaUser = req.body
    try {
      const novaUserCriada = await database.Users.create(novaUser)
      return res.status(200).json(novaUserCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaUser(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Users.update(novasInfos, { where: { id: Number(id) }})
      const userAtualizada = await database.Users.findOne( { where: { id: Number(id) }})
      return res.status(200).json(userAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaUser(req, res) {
    const { id } = req.params
    try {
      await database.Users.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = UserController