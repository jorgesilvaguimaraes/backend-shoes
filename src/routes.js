import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Routes Free
routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

// Middleware verifica se tá logado
routes.use(authMiddleware);

// Routes Users
routes.put('/users', UserController.update);
// routes.get('/user', UserController.index);
// routes.post('/users/:id', UserController.show);
// routes.delete('/users/:id', UserController.delete);

export default routes;
