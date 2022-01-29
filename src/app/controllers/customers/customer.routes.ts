import { Router } from 'express';

import CustomerController from './customer-controller';

const customerRouter: Router = Router();

customerRouter.post('/', CustomerController.create);

export default customerRouter;
