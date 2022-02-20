import { Router } from 'express';

import AddressController from './address.controller';

const addressRouter: Router = Router();

addressRouter.post('/', AddressController.create);
addressRouter.get('/:id', AddressController.getById);
addressRouter.put('/:id', AddressController.updateById);
addressRouter.delete('/:id', AddressController.delete);

export default addressRouter;
