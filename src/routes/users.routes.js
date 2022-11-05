const { Router } = require('express');
const UsersController  = require('../controllers/UsersController');
const userController = new UsersController();

const usersRoutes = Router();

// é aqui que a rota do usuário está, userController.cria usuario
usersRoutes.post('/', userController.create)


/* usersRoutes.post('/', (request, response) => {
 // Isso é responsabilidade do CONTROLLERS
  const { name, email, password } = request.body;
  response.json({ name, email, password }); 
}) */

module.exports = usersRoutes;