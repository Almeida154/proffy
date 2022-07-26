import { Router } from 'express';

import ClassController from './controllers/ClassController';
import ConnectionController from './controllers/ConnectionController';
import UserController from './controllers/UserController';

const routes = Router();

routes.post('/sign-in', UserController.create);

routes.get('/classes', ClassController.index);
routes.post('/classes', ClassController.create);

routes.get('/connections', ConnectionController.index);
routes.post('/connections', ConnectionController.create);

export default routes;
