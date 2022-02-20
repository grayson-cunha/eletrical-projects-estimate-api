import supertest, { SuperTest, Test } from 'supertest';
import app from '../../../src/app/app';
import Address from '../../../src/app/models/address';

beforeAll(async () => {
  await Address.sync({ force: true });
});

describe('address controller: enpoints test', () => {
  it('POST should return created address and status code 201', async () => {
    const response = await supertest(app.getExpressInstance())
      .post('/addresses')
      .send({
        address: 'test',
        address2: 'APTO X',
        number: '2',
        district: 'Bairro X',
        state: 'Minas Gerais',
        city: 'Belo Horizonte',
        cep: '30000000',
      });

    expect(response.status).toBe(201);
  });

  it('GET should return get address and status code 200', async () => {
    const address = await Address.create({
      address: 'test',
      address2: 'APTO X',
      number: '2',
      district: 'Bairro X',
      state: 'Minas Gerais',
      city: 'Belo Horizonte',
      cep: '30000000',
    });

    const response = await supertest(app.getExpressInstance())
      .get(`/addresses/${address.id}`)
      .send();

    expect(response.status).toBe(200);
  });

  it('PUT should return updated address and status code 200', async () => {
    const address = await Address.create({
      address: 'test',
      address2: 'APTO X',
      number: '2',
      district: 'Bairro X',
      state: 'Minas Gerais',
      city: 'Belo Horizonte',
      cep: '30000000',
    });

    const response = await supertest(app.getExpressInstance())
      .put(`/addresses/${address.id}`)
      .send({
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
      });

    console.log('PUT ', response.body);
    expect(response.status).toBe(200);
  });

  it('DELETE should return updated address and status code 200', async () => {
    const address = await Address.create({
      address: 'test',
      address2: 'APTO X',
      number: '2',
      district: 'Bairro X',
      state: 'Minas Gerais',
      city: 'Belo Horizonte',
      cep: '30000000',
    });

    const response = await supertest(app.getExpressInstance())
      .delete(`/addresses/${address.id}`)
      .send();

    console.log(response.body);

    expect(response.status).toBe(204);
  });
});
