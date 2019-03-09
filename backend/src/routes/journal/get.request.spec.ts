import * as supertest from 'supertest';
import { server } from '../../server';

describe('Get Journal Tests', () => {

  it('Should return journals', async () => {
    const { body } = await supertest(server).get('/api/journal/');

    expect(body).toBeDefined();
  });

});
