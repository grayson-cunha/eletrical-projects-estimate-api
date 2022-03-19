import mongoose from 'mongoose';

import {
  EstimateModel,
  ClientModel,
  ClientDocument,
} from '../../../src/app/models';
import Database from '../../../src/database';
import { testApi } from '../../test-request-helper';

const estimatesEndpoint = '/estimates';

let client: ClientDocument;

beforeAll(async () => {
  await Database.connect();

  client = await ClientModel.create({
    name: 'test',
    areaCode: '31',
    phoneNumber: '999999999',
  });
});

afterAll(async () => {
  await ClientModel.deleteMany({});
  await EstimateModel.deleteMany({});

  await Database.disconnect();
});

describe('address controller: enpoints test', () => {
  it('POST should return created address and status code 201', async () => {
    const response = await testApi(estimatesEndpoint, {
      data: '2022-03-18',
      client: client._id,
      products: [
        {
          name: 'tomada',
          amount: 1000,
          quantity: 1,
          link: 'https://lojaseletricas.com',
        },
      ],
      amount: 1000,
      startDate: new Date(),
      endDate: new Date(),
    }).post();

    expect(response.status).toBe(201);
    expect(response.body).not.toBeUndefined();
    expect(response.body.products).toHaveLength(1);
  });

  it('GET should return get estimate created before and status code 200', async () => {
    const estimate = await EstimateModel.create({
      data: '2022-03-18',
      client: client._id,
      products: [
        {
          name: 'tomada',
          amount: 1000,
          quantity: 1,
          link: 'https://lojaseletricas.com',
        },
      ],
      amount: 1000,
      startDate: new Date(),
      endDate: new Date(),
    });

    const response = await testApi(`${estimatesEndpoint}/${estimate.id}`).get();

    expect(response.status).toBe(200);
    expect(response.body._id).toEqual(estimate._id.toString());
  });

  it('GET should return 404 Resource not found when the Id is invalid', async () => {
    const invalidId = new mongoose.Types.ObjectId();

    const response = await testApi(
      `${estimatesEndpoint}/${invalidId.toString()}`
    ).get();

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Resource not found');
  });

  it('PUT should return updated estimate and status code 200', async () => {
    const estimate = await EstimateModel.create({
      data: '2022-03-18',
      client: client._id,
      products: [
        {
          name: 'tomada',
          amount: 1000,
          quantity: 1,
          link: 'https://lojaseletricas.com',
        },
      ],
      amount: 1000,
      startDate: new Date(),
      endDate: new Date(),
    });

    const response = await testApi(`${estimatesEndpoint}/${estimate._id}`, {
      data: '2022-03-19',
    }).put();

    expect(response.status).toBe(200);
    expect(response.body.data).not.toBe(estimate.data);
  });

  it('DELETE should return status code 200 and id of deleted estimate', async () => {
    const estimate = await EstimateModel.create({
      data: '2022-03-18',
      client: client._id,
      products: [
        {
          name: 'tomada',
          amount: 1000,
          quantity: 1,
          link: 'https://lojaseletricas.com',
        },
      ],
      amount: 1000,
      startDate: new Date(),
      endDate: new Date(),
    });

    const response = await testApi(
      `${estimatesEndpoint}/${estimate._id}`
    ).delete();

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(estimate._id.toString());
  });
});
