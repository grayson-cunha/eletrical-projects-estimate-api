import { Request, Response } from 'express';
import { AddressDocument, AddressModel } from '../../models';

type RequestParams = {
  id: string;
};

interface AddressRequestBody {
  address: string;
  address2: string;
  number: string;
  district: string;
  city: string;
  state: string;
  cep: string;
  country: string;
}

class AddressController {
  async create(req: Request, res: Response) {
    const addressData: AddressRequestBody = { ...req.body };

    const addressModel = new AddressModel(addressData);

    const address = await addressModel.save();

    return res.status(201).send(address);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params as RequestParams;

    const address: AddressDocument | null = await AddressModel.findById(id);

    return res.status(200).send(address);
  }

  async updateById(req: Request, res: Response) {
    const { id } = req.params as RequestParams;
    const addressUpdateData: AddressRequestBody = { ...req.body };

    const updatedAddress = await AddressModel.findByIdAndUpdate(
      id,
      addressUpdateData,
      {
        new: true,
      }
    );

    return res.status(200).send(updatedAddress);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params as RequestParams;

    await AddressModel.findByIdAndRemove(id);

    return res.status(204).send();
  }
}

export default new AddressController();
