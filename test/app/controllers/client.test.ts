import supertest, { SuperTest, Test } from 'supertest';
import app from '../../../src/app/server';
const request: SuperTest<Test> = supertest(app);

describe('client controller: enpoints test', () => {
  it('POST should return created client and status code 200', async () => {
    const response = await request
      .post('/clients')
      .send({ name: 'test', areaCode: '31', phoneNumber: '999999999' });

    const { id, ...client } = response.body;

    expect(response.status).toBe(200);
    expect(client).toBe({
      name: 'test',
      areaCode: '31',
      phoneNumber: '999999999',
    });
  });
});
