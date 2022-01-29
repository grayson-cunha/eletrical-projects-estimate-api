import { Router } from 'express';

import customerRouter from './controllers/customers/customer.routes';

const routes = Router();

routes.use('/customers', customerRouter);

export default routes;
