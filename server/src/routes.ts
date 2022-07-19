import { Router } from 'express';
import ClassController from './controllers/ClassController';
import ConnectionController from './controllers/ConnectionController';

const routes = Router();

routes.get('/classes', ClassController.index);
routes.post('/classes', ClassController.create);

routes.get('/connections', ConnectionController.index);
routes.post('/connections', ConnectionController.create);

export default routes;
