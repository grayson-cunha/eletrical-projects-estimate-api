import { AddressModel } from '../../../src/app/models';
import Database from '../../../src/database';
import { testApi } from '../../test-request-helper';

const addressEndpoint = '/addresses';

beforeAll(async () => {
  await Database.connect();
});

afterAll(async () => {
  await Database.disconnect();
});

describe('address controller: enpoints test', () => {
  it('POST should return created address and status code 201', async () => {
    const response = await testApi(addressEndpoint, {
      address: 'test',
      address2: 'APTO X',
      number: '2',
      district: 'Bairro X',
      state: 'Minas Gerais',
      city: 'Belo Horizonte',
      cep: '30000000',
      country: 'Brasil',
    }).post();

    expect(response.status).toBe(201);
  });

  it('GET should return get address and status code 200', async () => {
    const address = await AddressModel.create({
      address: 'test',
      address2: 'APTO X',
      number: '2',
      district: 'Bairro X',
      state: 'Minas Gerais',
      city: 'Belo Horizonte',
      cep: '30000000',
      country: 'Brasil',
    });

    const response = await testApi(`${addressEndpoint}/${address.id}`).get();

    expect(response.status).toBe(200);
  });

  it('PUT should return updated address and status code 200', async () => {
    const address = await AddressModel.create({
      address: 'test',
      address2: 'APTO X',
      number: '2',
      district: 'Bairro X',
      state: 'Minas Gerais',
      city: 'Belo Horizonte',
      cep: '30000000',
      country: 'Brasil',
    });

    const response = await testApi(`${addressEndpoint}/${address.id}`, {
      state: 'Rio de Janeiro',
      city: 'Rio de Janeiro',
    }).put();

    expect(response.status).toBe(200);
  });

  it('DELETE should return updated address and status code 200', async () => {
    const address = await AddressModel.create({
      address: 'test',
      address2: 'APTO X',
      number: '2',
      district: 'Bairro X',
      state: 'Minas Gerais',
      city: 'Belo Horizonte',
      cep: '30000000',
      country: 'Brasil',
    });

    const response = await testApi(`${addressEndpoint}/${address.id}`).delete();

    expect(response.status).toBe(204);
  });
});
