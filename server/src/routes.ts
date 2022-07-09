import { Router } from 'express';
import ClassController from './controllers/ClassController';

const routes = Router();

routes.post('/classes', ClassController.create);

export default routes;
