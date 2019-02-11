import * as rp from 'request-promise';

import { CA_CERT, TARGET_HOST } from '../../test/config';
import { PORT } from '../config/app';

async function request(protocol: string): Promise<any> {

  const url = TARGET_HOST + ':' + PORT;

  return rp(`${protocol}://${url}/`, {
    agentOptions: {
      ca: CA_CERT
    },
    resolveWithFullResponse: true
  });
}

describe('Api Tests', () => {

  it('HTTPS Request', async () => {
    const { statusCode } = await request('https');

    expect(statusCode).toEqual(200);
  });

  it('HTTP Request', async () => {

    expect.assertions(1);

    try {
      await request('http');
    } catch (e) {
      expect(e.message).toEqual('Error: socket hang up');
    }

  });
});
