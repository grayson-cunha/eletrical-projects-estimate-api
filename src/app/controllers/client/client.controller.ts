import { Request, Response } from 'express';
import { ClientModel } from '../../models';

interface ClientRequestBody {
  name: string;
  areaCode: string;
  phoneNumber: string;
}

class ClientController {
  async create(req: Request, res: Response) {
    const clientData: ClientRequestBody = { ...req.body };

    const clientModel = new ClientModel(clientData);

    const client = await clientModel.save();

    return res.json(client);
  }
}

export default new ClientController();
