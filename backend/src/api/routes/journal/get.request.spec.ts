import * as supertest from 'supertest';
import { app } from '../../server';

describe('Get Journal Tests', () => {

  it('Should return journals', async () => {
    const { body } = await supertest(app).get('/journal');

    expect(body.length).toBeDefined();
  });

});
