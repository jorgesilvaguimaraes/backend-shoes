import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

const teste = (req, res, next) => {
  const { isloged } = req.headers;

  if (!isloged) {
    return res.status(400).json({ error: 'usuário não logado!' });
  }

  return next();
};

routes.post('/sessions', SessionController.store);

// Middleware verifica se tá logado
routes.use(teste);

// Routes Users
// routes.get('/user', UserController.index);
routes.post('/users', UserController.store);
// routes.post('/users/:id', UserController.show);
// routes.put('/users/:id', UserController.update);
// routes.delete('/users/:id', UserController.delete);

export default routes;
