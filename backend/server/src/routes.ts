import express, { Request, Response} from 'express';

import ClassController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionControllers';

const routes = express.Router();
const classesController = new ClassController();
const connectionController = new ConnectionController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);


export default routes;