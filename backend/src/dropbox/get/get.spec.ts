import { getFile } from './get';

describe('Dropbox - Get', () => {

  it('Should Fail - Invalid File', async () => {
    expect.assertions(3);

    try {
      await getFile({
        id: 'invalid-id'
      });
    } catch (error) {
      expect(error.name).toMatch('StatusCodeError');
      expect(error.statusCode).toEqual(409);
      expect(error.message).toContain('not_found');
    }
  });
});
