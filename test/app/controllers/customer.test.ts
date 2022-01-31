import supertest, { SuperTest, Test } from 'supertest';
import app from '../../../src/app/server';
const request: SuperTest<Test> = supertest(app);

describe('customer controller: enpoints test', () => {
  it('POST should return created customer and status code 200', async () => {
    const response = await request
      .post('/customers')
      .send({ name: 'test', areaCode: '31', phoneNumber: '999999999' });

    expect(response.status).toBe(200);
    expect(response.body).toBe({
      id: 1,
      name: 'test',
      areaCode: '31',
      phoneNumber: '999999999',
    });
  });
});
