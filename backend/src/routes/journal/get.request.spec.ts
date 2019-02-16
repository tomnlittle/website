import * as supertest from 'supertest';
import { server } from '../../server';

describe('Get Journal Tests', () => {

  it('Should return journals', async () => {
    const { body } = await supertest(server).get('/journal');

    expect(body.length).toBeDefined();
  });

});
