import { Router } from 'express';

import addressRouter from './controllers/address/address.routes';
import clientRouter from './controllers/client/client.routes';
import estimateRouter from './controllers/estimate/estimate.routes';

const routes = Router();

routes.use('/clients', clientRouter);
routes.use('/addresses', addressRouter);
routes.use('/estimates', estimateRouter);

export default routes;
