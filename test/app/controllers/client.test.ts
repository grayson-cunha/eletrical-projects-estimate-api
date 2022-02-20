import Client from '../../../src/app/models/client';
import { testApi } from '../../test-request-helper';

const clientEndpoint = '/clients';

beforeAll(async () => {
  await Client.sync({ force: true });
});

describe('client controller: enpoints test', () => {
  it('POST should return created client and status code 200', async () => {
    const response = await testApi(clientEndpoint, {
      name: 'test',
      areaCode: '31',
      phoneNumber: '999999999',
    }).post();

    expect(response.status).toBe(200);
  });
});
