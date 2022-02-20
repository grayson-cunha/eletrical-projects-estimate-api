import Address from '../../../src/app/models/address';
import { testApi } from '../../test-request-helper';

const addressEndpoint = '/addresses';

beforeAll(async () => {
  await Address.sync({ force: true });
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
    }).post();

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

    const response = await testApi(`${addressEndpoint}/${address.id}`).get();

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

    const response = await testApi(`${addressEndpoint}/${address.id}`, {
      state: 'Rio de Janeiro',
      city: 'Rio de Janeiro',
    }).put();

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

    const response = await testApi(`${addressEndpoint}/${address.id}`).delete();

    expect(response.status).toBe(204);
  });
});
