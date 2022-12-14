const AppError = require('../utils/AppError');


class UsersController {
  /** Pode ter no MAXIMO 5 METÓDOS
   * index - GET para listar vários registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para remover um registro.
   */

  async create(request, response) {
    const { name, email, password } = request.body;

    if(!name) {
      throw new AppError('Nome é obrigatório')
    }
    return response.json({ name, email, password })
  }

}

module.exports = UsersController;