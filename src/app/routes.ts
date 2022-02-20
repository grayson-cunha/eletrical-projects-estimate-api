import { Router } from 'express';

import clientRouter from './controllers/client/client.routes';

const routes = Router();

routes.use('/clients', clientRouter);

export default routes;
