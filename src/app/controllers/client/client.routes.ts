import { Router } from 'express';

import ClientController from './client.controller';

const clientRouter: Router = Router();

clientRouter.post('/', ClientController.create);

export default clientRouter;
