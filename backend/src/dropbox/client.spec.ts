import { dropboxClient } from './client';

describe('Dropbox - Client', () => {

  it('Invalid Endpoint', async () => {

    expect.assertions(3);

    try {
      await dropboxClient({
        endpoint: 'invalid-endpoint',
        method: 'GET'
      });
    } catch (error) {
      expect(error.name).toMatch('StatusCodeError');
      expect(error.statusCode).toEqual(400);
      expect(error.error).toContain('Unknown API function');
    }
  });
});
