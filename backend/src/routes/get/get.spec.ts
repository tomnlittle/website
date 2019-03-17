import * as supertest from 'supertest';

import { server } from '../../server';

describe('Get Journal Request', () => {

  it('Invalid Id', async () => {
    const { status } = await supertest(server)
                            .get('/api/get')
                            .query({
                              path: 'hello'
                            });

    expect(status).toEqual(400);
  });

  it('Valid Id - check file dowload', async () => {
    const { status } = await supertest(server)
                            .get('/api/get')
                            .query({
                              path: 'id:1mx41MPd2NAAAAAAAAAAVg'
                            });

    expect(status).toEqual(200);
  });

});
