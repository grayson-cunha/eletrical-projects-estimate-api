import supertest, { SuperTest, Test } from 'supertest';
import app from '../../../src/app/app';
import Client from '../../../src/app/models/client';

beforeAll(async () => {
  await Client.sync({ force: true });
});

describe('client controller: enpoints test', () => {
  it('POST should return created client and status code 200', async () => {
    const response = await supertest(app.getExpressInstance())
      .post('/clients')
      .send({ name: 'test', areaCode: '31', phoneNumber: '999999999' });

    expect(response.status).toBe(200);
  });
});
