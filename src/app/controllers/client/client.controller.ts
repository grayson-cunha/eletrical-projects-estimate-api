import { Request, Response } from 'express';
import { ClientModel } from '../../models';

interface CreateClientRequestBody {
  name: string;
  areaCode: string;
  phoneNumber: string;
}

class ClientController {
  async create(req: Request, res: Response) {
    const clientData = req.body as CreateClientRequestBody;

    const clientModel = new ClientModel(clientData);

    const client = await clientModel.save();

    return res.json(client);
  }
}

export default new ClientController();
