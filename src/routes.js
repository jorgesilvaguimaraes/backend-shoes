import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

const teste = (req, res, next) => {
  const { isloged } = req.headers;

  if (!isloged) {
    return res.status(400).json({ error: 'usuário não logado!' });
  }

  return next();
};
// Middleware verifica se tá logado
routes.use(teste);

//Routes User
// routes.get('/user', UserController.index);
routes.post('/user', UserController.store);
// routes.post('/user/:id', UserController.show);
// routes.put('/user/:id', UserController.update);
// routes.delete('/user/:id', UserController.delete);

export default routes;
