import { Request, Response } from 'express';
import Customer, { CustomerOuput } from '../../models/customer';

class CustomerController {
  async create(req: Request, res: Response) {
    const customer: CustomerOuput = await Customer.create({
      ...req.body,
    });

    return res.json(customer);
  }
}

export default new CustomerController();
