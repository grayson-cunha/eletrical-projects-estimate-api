import Database from '../../../src/database';
import { testApi } from '../../test-request-helper';

const clientEndpoint = '/clients';

beforeAll(async () => {
  await Database.connect();
});

afterAll(async () => {
  await Database.disconnect();
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
