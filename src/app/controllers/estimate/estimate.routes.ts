import { Router } from 'express';

import EstimateController from './estimate.controller';

const estimateRouter: Router = Router();

estimateRouter.post('/', EstimateController.create);
estimateRouter.get('/:id', EstimateController.getById);
estimateRouter.put('/:id', EstimateController.updateById);
estimateRouter.delete('/:id', EstimateController.delete);

export default estimateRouter;
