import { Request, Response } from 'express';
import Address, { AddressOutput, AddressInput } from '../../models/address';

type RequestParams = {
  id: string;
};

class AddressController {
  async create(req: Request, res: Response) {
    const addressData = req.body as AddressInput;

    const address: AddressOutput = await Address.create({
      ...addressData,
    });

    return res.status(201).send(address);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params as RequestParams;

    const address: AddressOutput | null = await Address.findByPk(id);

    return res.status(200).send(address);
  }

  async updateById(req: Request, res: Response) {
    const { id } = req.params as RequestParams;
    const addressUpdateData = req.body as AddressInput;

    const [, [affectedRow]] = await Address.update(
      { ...addressUpdateData },
      { where: { id: Number(id) }, returning: true }
    );

    const updatedAddress = affectedRow.get({ plain: true });

    return res.status(200).send(updatedAddress);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params as RequestParams;

    await Address.destroy({
      where: { id: Number(id) },
    });

    return res.status(204).send();
  }
}

export default new AddressController();
