import { Router } from 'express';

import addressRouter from './controllers/address/address.routes';
import clientRouter from './controllers/client/client.routes';

const routes = Router();

routes.use('/clients', clientRouter);
routes.use('/addresses', addressRouter);

export default routes;
