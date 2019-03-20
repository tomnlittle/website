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

  it('Valid Id - check file download', async () => {
    const { status } = await supertest(server)
                            .get('/api/get')
                            .query({
                              path: '/journals/01-22-17/index.md'
                            });

    expect(status).toEqual(200);
  });

});
