import { Request, Response } from 'express';
import Client, { ClientOutput } from '../../models/client';

class ClientController {
  async create(req: Request, res: Response) {
    const client: ClientOutput = await Client.create({
      ...req.body,
    });

    return res.json(client);
  }
}

export default new ClientController();
