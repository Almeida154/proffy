import { Router } from 'express';

import authMiddleware from './middlewares/authMiddleware';

import ClassController from './controllers/ClassController';
import ConnectionController from './controllers/ConnectionController';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const routes = Router();

routes.post('/sign-in', UserController.create);

routes.post('/log-in', AuthController.login);

routes.get('/classes', authMiddleware, ClassController.index);
routes.post('/classes', authMiddleware, ClassController.create);

routes.get(
  '/connections',
  authMiddleware,
  ConnectionController.index
);
routes.post(
  '/connections',
  authMiddleware,
  ConnectionController.create
);

export default routes;
