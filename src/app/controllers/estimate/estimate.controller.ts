import { Request, Response } from 'express';
import { EstimateDocument, EstimateModel } from '../../models';

type RequestParams = {
  id: string;
};

interface EstimateRequestBody {
  data: string;
  client: string;
  products: [];
  amount: number;
  startDate: Date;
  endDate: Date;
}

class EstimateController {
  async create(req: Request, res: Response) {
    const estimateData: EstimateRequestBody = { ...req.body };

    const estimateModel = new EstimateModel(estimateData);

    const estimate = await estimateModel.save();

    return res.json(estimate);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params as RequestParams;

    const estimate: EstimateDocument | null = await EstimateModel.findById(id);

    if (!estimate) {
      return res.status(404).send({ message: 'Resource not found' });
    }

    return res.status(200).send(estimate);
  }

  async updateById(req: Request, res: Response) {
    const { id } = req.params as RequestParams;
    const estimateUpdateData: EstimateRequestBody = { ...req.body };

    const updatedEstimate = await EstimateModel.findByIdAndUpdate(
      id,
      estimateUpdateData
    );

    return res.status(200).send(updatedEstimate);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params as RequestParams;

    await EstimateModel.findByIdAndRemove(id);

    return res.status(204).send();
  }
}

export default new EstimateController();
